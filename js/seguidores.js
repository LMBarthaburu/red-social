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

const openMenu=()=>{
  const menu = document.getElementById('menu')
  const contenedor = document.getElementById('contenedor')

  contenedor.classList.add('hover')
  menu.classList.remove('d-lg-none')
  menu.classList.add('d-lg-flex')
}

const closeMenu=()=>{
  const menu = document.getElementById('menu')
  const contenedor = document.getElementById('contenedor')

  contenedor.classList.remove('hover')
  menu.classList.add('d-lg-none')
  menu.classList.remove('d-lg-flex')
}

const usersApi = async () => {
  const urlApi = await fetch('https://randomuser.me/api/?results=12');
  const jsonUsersApi = await urlApi.json();
  return jsonUsersApi.results
}

 const dataUser = async () => {
   const dataUserApi = await usersApi()
   console.log(dataUserApi)
   const cardContainer = document.getElementById('card-container')

const cardSeguidores = dataUserApi.map(user => `
   <div class="card-seguidores text-center pt-3 mx-1">
           <img src="${user.picture.large}" class="image-perfil card-img-top rounded-circle" id="foto-de-perfil" alt="foto de perfil">
           <div class="card-body px-1">
             <h5 class="card-title fw-bold w-100" id="nombre-y-apellido">${user.name.first} ${user.name.last}</h5>
             <h6 class="card-text nombre-usuario fw-bold fst-italic" id="nombre-usuario">${`@`}${user.login.username}</h6>
             <h6 class="card-text nombre-usuario" id="edad">${user.dob.age}${` años`}</h6>
             <p class="card-text nombre-usuario fst-italic lh-1" id="ciudad-de-origen">${`📍`}${user.location.city}${`, `}${user.location.state}</p>
             <button class="boton-seguir p-1 px-2" onclick="seguir('${user.login.uuid}')" id="${user.login.uuid}"><b>SEGUIR</b></button>
           </div>
         </div>
   `)
  cardContainer.innerHTML = cardSeguidores.join('')
 }

 dataUser()

 let n = 0
const seguir = (id) => {
  const numSeguidores = localStorage.getItem('seguidores')
  n=parseInt(numSeguidores)
  const botonSeguir = document.getElementById(id);
  const seguidores = document.getElementById('numero-seguidores')
  console.log(`${n}`)
  if (botonSeguir.innerText === "SEGUIR") {
    botonSeguir.innerHTML = 'Dejar de seguir';
    n = n+1
    seguidores.innerHTML= `${n}`
  } else {
    botonSeguir.innerHTML = `<b>SEGUIR</b>`;
    n = n-1
    seguidores.innerHTML= `${n}`
  }
  localStorage.setItem('seguidores',n)
}
 const getSeguidores =()=>{
  const numSeguidores = localStorage.getItem('seguidores')
  const seguidores = document.getElementById('numero-seguidores')
  seguidores.innerHTML= `${numSeguidores}`
 }
 getSeguidores()
