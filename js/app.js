const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const validarLogin = (evnt) => {
  const email = document.getElementById('email');
  const pass = document.getElementById('pass');
  evnt.preventDefault();
  if(!email.value || !pass.value){
    alert('Debe ingresar ambos campos.');
    return;
  }
  const usuarioDatos = localStorage.getItem('usuario');
  if(usuarioDatos !== null){
    const usuarioObjeto = JSON.parse(usuarioDatos);
    if(email.value !== usuarioObjeto.email || pass.value !== usuarioObjeto.pass){
      alert('Email o contraseña incorrecta.');
      return;
    }
  } else {
    alert('Usuario inexistente.');
    return;
  }
  window.location.href = '/feed.html';
}

const validarRegistro = (e) => {
  const email = document.getElementById('email');
  const nombre = document.getElementById('nombre');
  const user = document.getElementById('usuario');
  const pass = document.getElementById('password');
  const passCtrl = document.getElementById('pass-repeat');
  const acepta = document.getElementById('invalidCheck');
  e.preventDefault();
  if(!email.value || !nombre.value || !user.value || !pass.value || !passCtrl.value){
    return;
  }
  if(!regExEmail.test(email.value)){
    return;
  }
  if(pass.value !== passCtrl.value){
    alert('Las contraseñas ingresadas deben ser iguales.');
    return;
  }
  if(!regExPass.test(pass.value)){
    alert('La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.');
    return;
  }
  if(acepta.checked !== true){
    alert('Debe aceptar nuestros términos y condiciones.');
    return;
  }
  const usuarioDatos = localStorage.getItem('usuario');
  if(usuarioDatos !== null){
    const usuarioObjeto = JSON.parse(usuarioDatos);
    if(email.value === usuarioObjeto.email){
      alert('El mail ingresado ya existe en nuestra base de datos.');
      return;
    }
  }
  
  const usuarioObj = {
    user : user.value,
    pass : pass.value,
    nombre : nombre.value,
    email : email.value
  }
  const usuarioString = JSON.stringify(usuarioObj);

  localStorage.setItem('usuario', usuarioString);
  window.location.href = '/index.html';
}

//
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()