const getData=()=>{
  const data = localStorage.getItem('usuario')
  const dataObj = JSON.parse(data)
  const navPerfil = document.getElementById('nav-perfil')
  navPerfil.innerHTML=`${dataObj.nombre}`
}
getData()

const nombrePerfil=()=>{
  const nombreData = localStorage.getItem('usuario')
  const nombreDataObj = JSON.parse(nombreData)
  const usuarioPerfil = document.getElementById('button-perfil')
  usuarioPerfil.innerHTML=`${nombreDataObj.nombre}`
}
nombrePerfil()

const emailPerfil=()=>{
  const emailData = localStorage.getItem('email')
  const emailDataObj = JSON.parse(emailData)
  const emailPerfil = document.getElementById('email-perfil')
  emailPerfil.innerHTML=`${emailDataObj.email}`
}
emailPerfil()

openMenu=()=>{
  const menu = document.getElementById('menu')
  const contenedor = document.getElementById('contenedor')

  contenedor.classList.add('hover')
  menu.classList.remove('d-lg-none')
  menu.classList.add('d-lg-flex')
}

closeMenu=()=>{
  const menu = document.getElementById('menu')
  const contenedor = document.getElementById('contenedor')

  contenedor.classList.remove('hover')
  menu.classList.add('d-lg-none')
  menu.classList.remove('d-lg-flex')
}

const listenForLikes = () => {
  const likes = document.querySelectorAll(".like");
  likes.forEach(like => {
   like.addEventListener("click", (event) => {
     event.target.classList.toggle("like-no");
     event.target.classList.toggle("like-yes");
     if (event.target.classList.contains("like-yes")) {
       console.log("✅💾 Saving Favorite...");
       getFaveData(event.target);
     } else {
       console.log("❌ Removing Favorite...");
       getFaveData(event.target);
     }
   })
  })
}