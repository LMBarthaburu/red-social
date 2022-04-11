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