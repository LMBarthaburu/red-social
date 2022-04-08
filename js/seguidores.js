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
  const urlApi = await fetch('https://randomuser.me/api/?results=100');
  const jsonUsersApi = await urlApi.json();
  return jsonUsersApi.results
}

const dataUser = async () => {
  const dataUserApi = await usersApi()
  console.log(dataUserApi)
  
  const cardSeguidores = dataUserApi.map(user => `
  <div class="card-seguidores text-center w-1 pt-3">
          <img src="https://picsum.photos/200?random=1" class="image-perfil card-img-top" id="foto-de-perfil" alt="foto de perfil">
          <div class="card-body">
            <h5 class="card-title" id="nombre-y-apellido">Nombre y apellido</h5>
            <h6 class="card-text nombre-usuario" id="nombre-usuario">@nombredeusuario</h6>
            <h6 class="card-text nombre-usuario" id="edad">Edad</h6>
            <p class="card-text nombre-usuario" id="ciudad-de-origen">Ciudad de origen</p>
            <a href="#" class="btn btn-light btn-sm">Seguir</a>
          </div>
        </div>
  `)
}

dataUser()