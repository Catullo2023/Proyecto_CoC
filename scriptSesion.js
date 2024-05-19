document.getElementById("botonRegistrarse").addEventListener("click",registro);
document.getElementById("botonIngresar").addEventListener("click",iniciarS);

var contenedor=document.querySelector(".contenedorFormulario");
var formularioLogin=document.querySelector(".formLogin");
var formularioRegistro=document.querySelector(".formRegistro");
var login=document.querySelector(".login");
var registroF=document.querySelector(".Registro");
function iniciarS(){
formularioRegistro.style.display="none";
contenedor.style.left="10px";
formularioLogin.style.display="block"; 
login.style.opacity="0";
registroF.style.opacity="1";
}
function registro(){
    formularioRegistro.style.display="block";
    contenedor.style.left="410px";
    formularioLogin.style.display="none"; 
    login.style.opacity="1";
    registroF.style.opacity="0";
    }