//Ingreso y registro desplazable
document.getElementById("botonRegistrarse").addEventListener("click",registro);
document.getElementById("botonIngresar").addEventListener("click",iniciarS);

var contenedor=document.querySelector(".contenedorFormulario");
var formularioLogin=document.querySelector(".formLogin");
var formularioRegistro=document.querySelector(".formRegistro");
var login=document.querySelector(".login");
var registroF=document.querySelector(".Registro");
//no está andando el responsive ver los media-query y los else
function iniciarS(){
    if(window.innerWidth>768){
        formularioRegistro.style.display="none";
        contenedor.style.left="10px";
        formularioLogin.style.display="block"; 
        login.style.opacity="0";
        registroF.style.opacity="1";
    }else{
        formularioRegistro.style.display="none";
        contenedor.style.left="0px";
        formularioLogin.style.display="block"; 
        login.style.display="none";
        registroF.style.display="block";
    }

}
function registro(){
    if(window.innerWidth>768){
       formularioRegistro.style.display="block";
    contenedor.style.left="410px";
    formularioLogin.style.display="none"; 
    login.style.opacity="1";
    registroF.style.opacity="0"; 
    }else{
        formularioRegistro.style.display="block";
        contenedor.style.left="0px";
        formularioLogin.style.display="none"; 
        login.style.display="block";
        registroF.style.display="none"; 
        //login.style.opacity="1";
    }
    //-------------Error------------------------
    }

    function mostrarError(relleno, mensaje) {
        const elementoError = document.getElementById(`${relleno}-error`);
        elementoError.innerText = mensaje;
    }
    //-----------------form-----------------
    const email = document.getElementById('email');
    const password = document.getElementById('password');  
   
    function validarFormulario() {
        let bandera = true;

        mostrarError('email', '');
        mostrarError('password', '');
        email.style.border='';
        password.style.border='';
        if (email.value === '') {
            mostrarError('email', 'El email es obligatorio');
            email.style.border='1px solid red';
            bandera = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            mostrarError('email', 'El email no es válido');
            email.style.border='1px solid red';
            bandera = false;
        }
 
        if (password.value === '') {
            mostrarError('password', 'La contraseña es obligatoria');
            password.style.border= '1px solid red';
            bandera = false;
        } else if (password.value.length < 6) {
            mostrarError('password', 'La contraseña debe tener al menos 6 caracteres');
            password.style.border= '1px solid red';
            bandera = false;
        }

        return bandera;
    }

    
    const formLogin = document.getElementById('fLogin');

    formLogin.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío del formulario
        if (validarFormulario()) {
            formLogin.submit(); 
        }
    });
    
    //----------------Contraseña----------------------
    bandera=true;
    function teVeo(){
            if(bandera){
                document.getElementById("password").type="password";
                document.getElementById("passOjo").src="imagenes/pass/ojo-cruzado.png";
                bandera=false;
            }else{
                document.getElementById("password").type="text";
                document.getElementById("passOjo").src="imagenes/pass/ojo.png";
                bandera=true;
            }
    }
    //-------------------eliminar--------------------
   
    document.addEventListener('click', function() {
        const mensajesError = document.querySelectorAll('.error');
        mensajesError.forEach(function(mensaje) {
            mensaje.innerText = ''; 
        });
        const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.style.border = ''; // Restablecer el borde del input
    });
    const select = document.getElementById('pais');
    select.style.border = '';
    });