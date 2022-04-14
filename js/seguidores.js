const getData=()=>{
  const data = localStorage.getItem('usuario')
  const dataObj = JSON.parse(data)
  const navPerfil = document.getElementById('nav-perfil')
  navPerfil.innerHTML=`${dataObj.nombre}`
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

const usersApi = async () => {
  const urlApi = await fetch('https://randomuser.me/api/?results=6');
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
             <h5 class="card-title fw-bold" id="nombre-y-apellido">${user.name.first} ${user.name.last}</h5>
             <h6 class="card-text nombre-usuario fw-bold fst-italic" id="nombre-usuario">${`@`}${user.login.username}</h6>
             <h6 class="card-text nombre-usuario" id="edad">${user.dob.age}${` años`}</h6>
             <p class="card-text nombre-usuario fst-italic lh-1" id="ciudad-de-origen">${`📍`}${user.location.city}${`, `}${user.location.state}</p>
             <button class="boton-seguir p-1 px-2" onclick="seguir()" id="boton-seguir"><b>SEGUIR</b></button>
           </div>
         </div>
   `)
  cardContainer.innerHTML = cardSeguidores.join('')
 }

 dataUser()

const botonSeguirValor = false;

const seguir = () => {
  const botonSeguir = document.getElementById('boton-seguir');
  if (botonSeguir !== false) {
    botonSeguir.innerHTML = 'Dejar de seguir'
  }
}
