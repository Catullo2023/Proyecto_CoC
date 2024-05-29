const clave="AIzaSyB5pbXuWuRylbF_P9JafznUWcPZQT_y6jM";
const url="https://www.googleapis.com/books/v1/volumes";

       let currentPage = 0;
        const corte = 20;

        function llamarAPI(page) {
            const startIndex = page * corte;
            fetch(`${url}?q=subject:fiction&startIndex=${startIndex}&maxResults=${corte}&key=${clave}`)
                .then(response => response.json())
                .then(data => dibujarDatos(data));
        }

        function dibujarDatos(json) {
            const filas = json.items.map(obj => Libro(obj));
            document.querySelector('.tendencias').innerHTML = filas.join('');
        }

        function Libro(obj) {
            const info = obj.volumeInfo;
            return `
                <div class="tendenciasLibros">
                    <img src="${info.imageLinks ? info.imageLinks.thumbnail : 'https://via.placeholder.com/150'}" alt="${info.title}" loading="lazy">
                    
                        <h4>${info.title}</h4>
                    
                </div>
            `;
        }

        function cargarPaginaSiguiente() {
            currentPage++;
            llamarAPI(currentPage);
        }

        function cargarPaginaAnterior() {
            if (currentPage > 0) {
                currentPage--;
                llamarAPI(currentPage);
            }
        }

        document.querySelector('.anterior').addEventListener('click', cargarPaginaAnterior);
        document.querySelector('.siguiente').addEventListener('click', cargarPaginaSiguiente);

        llamarAPI(currentPage);



/*async function obtenerLibros() {
    const query = 'JavaScript';
   
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${clave}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error al buscar libros:', error);
    }
}

// Llamar a la función para obtener libros al cargar la página
window.onload = obtenerLibros;*/
