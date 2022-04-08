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
  const urlApi = await fetch('https://randomuser.me/api/?results=10');
  const jsonUsersApi = await urlApi.json();
  return jsonUsersApi.results
}

const dataUser = async () => {
  const dataUserApi = await usersApi()
  console.log(dataUserApi)
  const cardContainer = document.getElementById('card-container')

  const cardSeguidores = dataUserApi.map(user => `
  <div class="card-seguidores text-center pt-3 mx-1 col-3">
          <img src="${user.picture.large}" class="image-perfil card-img-top" id="foto-de-perfil" alt="foto de perfil">
          <div class="card-body">
            <h5 class="card-title" id="nombre-y-apellido">${user.name.first} ${user.name.last}</h5>
            <h6 class="card-text nombre-usuario" id="nombre-usuario">${`@`}${user.login.username}</h6>
            <h6 class="card-text nombre-usuario" id="edad">${user.dob.age}${` años`}</h6>
            <p class="card-text nombre-usuario" id="ciudad-de-origen">${user.location.city}${`, `}${user.location.state}</p>
            <a href="#" class="btn btn-light btn-sm">Seguir</a>
          </div>
        </div>
  `)
 cardContainer.innerHTML = cardSeguidores.join('')
}

dataUser()