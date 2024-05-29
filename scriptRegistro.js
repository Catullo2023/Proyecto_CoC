const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const fecha = document.getElementById('fecha');
const correo = document.getElementById('R_email');
const pass = document.getElementById('rPassword');
const pais = document.getElementById('pais');
const check = document.getElementById('checkbox');
const bRegistro = document.getElementById('bRegistrarse');
const formRegis = document.getElementById('fRegistro');

const noNum=/^[\p{L}\s]+$/u;
function validar(){
    let centinela=true;
    mostrarError('nombre', '');
    mostrarError('apellido', '');
    mostrarError('fecha', '');
    mostrarError('R_email', '');
    mostrarError('rPassword', '');
    mostrarError('pais','');
    mostrarError('checkbox', '');
    nombre.style.border="";
    apellido.style.border="";
    fecha.style.border="";
    correo.style.border="";
    pass.style.border="";
    pais.style.border="";
    check.style.border = "";

    if(nombre.value===""){
            mostrarError('nombre', 'El nombre es obligatorio');
            nombre.style.border='1px solid red';
            centinela = false;
    }else if (!noNum.test(nombre.value)) {
        mostrarError('nombre', 'El nombre solo debe contener letras y espacios');
        nombre.style.border = '1px solid red';
        centinela = false;
    }
    if (apellido.value === "") {
        mostrarError('apellido', 'El apellido es obligatorio');
        apellido.style.border = '1px solid red';
        centinela = false;
    }else if (!noNum.test(nombre.value)) {
        mostrarError('nombre', 'El nombre solo debe contener letras y espacios');
        nombre.style.border = '1px solid red';
        centinela = false;
    }
    if (fecha.value === "") {
        mostrarError('fecha', 'La fecha de nacimiento es obligatoria');
        fecha.style.border = '1px solid red';
        centinela = false;
    }
    if (correo.value === '') {
        mostrarError('R_email', 'El email es obligatorio');
        correo.style.border='1px solid red';
        centinela = false;
    } else if (!/\S+@\S+\.\S+/.test(correo.value)) {
        mostrarError('R_email', 'El email no es válido');
        correo.style.border='1px solid red';
        centinela = false;
    }
    if (pass.value === '') {
        mostrarError('rPassword', 'La contraseña es obligatoria');
        pass.style.border= '1px solid red';
        centinela = false;
    } else if (pass.value.length < 6) {
        mostrarError('rPassword', 'La contraseña debe tener al menos 6 caracteres');
        pass.style.border= '1px solid red';
        centinela = false;
    }
    if (pais.value === "nada") {
        mostrarError('pais', 'Seleccione su país de origen');
        pais.style.border = '1px solid red';
        centinela = false;
    }
    if (!check.checked) {
        mostrarError('checkbox', 'Debe aceptar los términos y condiciones');
        check.style.border = '1px solid red';
        centinela = false;
    }
    return centinela;

}
//const formRegis = document.getElementById('fRegistro');
/*bRegistro.addEventListener("click", function(e){
    e.preventDefault();
    if(validar()){
        formRegis.submit();
    }
  });*/
  

  formRegis.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío del formulario        
        if (validar()) {
            formRegis.submit(); 
        }
    });


 //----------------Contraseña----------------------
 centinela=true;
 function teVeoRegistro(){
         if(centinela){
             document.getElementById("rPassword").type="password";
             document.getElementById("rPassOjo").src="imagenes/pass/ojo-cruzado.png";
             centinela=false;
         }else{
             document.getElementById("rPassword").type="text";
             document.getElementById("rPassOjo").src="imagenes/pass/ojo.png";
             centinela=true;
         }
 }