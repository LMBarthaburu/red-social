const getData=()=>{
  const data = localStorage.getItem('usuario')
  const dataObj = JSON.parse(data)
  const navPerfil = document.getElementById('nav-perfil')
  navPerfil.innerHTML=`${dataObj.nombre}`
  const usuarioPerfil = document.getElementById('nombre-perfil')
  usuarioPerfil.innerHTML=`${dataObj.nombre}`
  const emailPerfil = document.getElementById('email-perfil')
  emailPerfil.innerHTML=`${dataObj.email}`
}
getData()

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

// CHAT

const chatApi = async () => {
  const urlChatApi = await fetch('https://randomuser.me/api/?results=9');
  const jsonChatsApi = await urlChatApi.json();
  return jsonChatsApi.results
}

 const dataChat = async () => {
   const dataChatApi = await chatApi()
   console.log(dataChatApi)
   const chatContainer = document.getElementById('chat-info')

const divChat = dataChatApi.map(user => `
  <div class="d-flex justify-content-center">
    <img src="${user.picture.large}" class="image-perfil-chat rounded-circle" id="foto-de-perfil" alt="foto de perfil">
    <h5 class="name-style-chat d-flex align-items-center fw-bold"">${user.name.first} ${user.name.last}
    </h5>
  </div>
   `)
  chatContainer.innerHTML = divChat.join('')
 }

 dataChat()
