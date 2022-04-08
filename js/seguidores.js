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
  const urlApi = await fetch('https://randomuser.me/api/?results=9');
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
          <div class="card-body">
            <h5 class="card-title fw-bold" id="nombre-y-apellido">${user.name.first} ${user.name.last}</h5>
            <h6 class="card-text nombre-usuario fw-bold fst-italic" id="nombre-usuario">${`@`}${user.login.username}</h6>
            <h6 class="card-text nombre-usuario" id="edad">${user.dob.age}${` años`}</h6>
            <p class="card-text nombre-usuario fst-italic lh-1" id="ciudad-de-origen">${user.location.city}${`, `}${user.location.state}</p>
            <a href="#" class="boton-seguir btn btn-light btn-sm fw-bold">SEGUIR</a>
          </div>
        </div>
  `)
 cardContainer.innerHTML = cardSeguidores.join('')
}

dataUser()