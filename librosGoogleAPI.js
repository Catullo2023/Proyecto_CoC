const clave="AIzaSyB5pbXuWuRylbF_P9JafznUWcPZQT_y6jM";
const url="https://www.googleapis.com/books/v1/volumes";

let currentPage = 0;
const corte = 20;
let currentSearchText="";
let currentSearchType="";
function llamarAPI(page) {
    const startIndex = page * corte;
    fetch(`${url}?q=books&startIndex=${startIndex}&maxResults=${corte}&key=${clave}`)
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}
/**------------------------------------------------BUSCADOR----------------------------------------------------------------------- */
document.querySelector(".formularioBuscador").addEventListener('submit', function(evento){
evento.preventDefault();
const texto=document.querySelector(".inputBuscador").value;
const opDesplegable=document.querySelector("#items").value;

buscarLibro(0,texto,opDesplegable);
});

function buscarLibro(page,texto,opDesplegable){
startIndex=page*corte;
let buscar="";
switch(opDesplegable){
       case "titulo":
            buscar=`intitle:${texto}`;
            break;
        case "autor": 
            buscar=`inauthor:${texto}`;
            break;
        case "genero":
            buscar=`subject:${texto}`;
            break;       
}
fetch(`${url}?q=${buscar}&startIndex=${startIndex}&maxResults=${corte}&key=${clave}`)
.then(response => response.json())
.then(data => dibujarDatos(data));
currentSearchText = texto;
currentSearchType = opDesplegable;
currentPage=page;
}
/**--------------------------------------------------------------------------------------------------------------------------------- */

function dibujarDatos(json) {
    const filas = json.items.map(obj => Libro(obj));
    document.querySelector('.tendencias').innerHTML = filas.join('');
}


function Libro(obj) {
    const info = obj.volumeInfo;
    return `
        <div class="tendenciasLibros">
            <img src="${info.imageLinks ? info.imageLinks.thumbnail : 'https://via.placeholder.com/150'}" alt="${info.title}" loading="lazy">
            <div class="tituloLibro">
                <h4>${info.title}</h4>
            </div>
        </div>
    `;
}

function cargarPaginaSiguiente() {
    currentPage++;
    if (currentSearchText) {
        buscarLibro(currentPage, currentSearchText, currentSearchType);
    } else {
        llamarAPI(currentPage);
    }
}

function cargarPaginaAnterior() {
    if (currentPage > 0) {
        currentPage--;
        if (currentSearchText) {
            buscarLibro(currentPage, currentSearchText, currentSearchType);
        } else {
            llamarAPI(currentPage);
        }
    }
}

document.querySelector('.bot_anterior').addEventListener('click', cargarPaginaAnterior);
document.querySelector('.bot_siguiente').addEventListener('click', cargarPaginaSiguiente);

llamarAPI(currentPage);
/**------------------------------------------------------Más leído---------------------------------------------------------------------------- */
function loMasLeido(){
fetch(`${url}?q=intitle:best+author:popular&maxResults=20&orderBy=relevance&key=${clave}`)
.then(response => response.json())
.then(data => dibujarLoMasLeido(data));
}
function dibujarLoMasLeido(json){
const filas = json.items.map(obj => LibroMasLeido(obj));
document.querySelector('.loMasLeido').innerHTML = filas.join('');
}
function LibroMasLeido(obj) {
const info = obj.volumeInfo;
return `
<li class="listLibroMasLeido">
<a href="${info.infoLink}" class="linkLibroMasLeido" target="_blank">${info.title}</a>
<p>${info.description || 'No hay descripción disponible.'}</p>
</li>
`;
}
loMasLeido();