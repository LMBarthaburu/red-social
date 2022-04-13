const getData=()=>{
  const data = localStorage.getItem('usuario')
  const dataObj = JSON.parse(data)
  const navPerfil = document.getElementById('nav-perfil')
  navPerfil.innerHTML=`${dataObj.nombre}`
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

const mostrarInputPosteo = ()=>{
  const inputPublicaion=document.getElementById('input-publicacion')
  const inputPublicaionImg=document.getElementById('input-publicacion-img')
  inputPublicaion.classList.remove('d-none')
  inputPublicaionImg.classList.add('d-none')
  inputPublicaionImg.classList.remove('d-lg-flex')

}

const mostrarInputImg = ()=>{
  const inputPublicaion=document.getElementById('input-publicacion')
  const inputPublicaionImg=document.getElementById('input-publicacion-img')
  inputPublicaion.classList.add('d-none')
  inputPublicaionImg.classList.remove('d-none')
  inputPublicaionImg.classList.add('d-lg-flex')
}

const previsualizacion =()=>{
  const inputPublicaion=document.getElementById('img-publicacion')
  const previsualizacionImg=document.getElementById('img-previsualizacion')
  previsualizacionImg.classList.remove('d-none')
  const archivos = inputPublicaion.files
  const muetra = archivos[0]
  const objectURL = URL.createObjectURL(muetra)
  previsualizacionImg.src = objectURL
}

let arrayCards = []

const crearPublicacion=()=>{
  const data = localStorage.getItem('usuario')
  const dataObj = JSON.parse(data)

  const texto = document.getElementById('input-text')
  const area = document.getElementById('publicaiones-nuevas')

  const date = new Date()
  const fechaNumero=date.toLocaleString('sp',  {day: 'numeric'} )
  const fechaMes=date.toLocaleString('sp', {month: 'short'})
  const fechaAño=date.toLocaleString('sp', {year:'numeric'})
  const fecha = `${fechaNumero}/${fechaMes}/${fechaAño}`

  const fechahora = new Date()
  let hora = fechahora.getHours() 
  let minuto = fechahora.getMinutes()
  let meridiano = "AM";
  if(hora == 0){
      hora = 12
  }
  if(hora > 12) {
      hora = hora - 12
      meridiano = "PM"
  }
  hora = (hora < 10) ? "0" + hora : hora
  minuto = (minuto < 10) ? "0" + minuto : minuto   
  const tiempo =hora + ":" + minuto + " " + meridiano   

  if(!texto.value){
    return
  }
  const contenedor = document.createElement('div')
  area.prepend(contenedor)
  const cards = `
    <div class="publicacion-nueva my-2">
      <div class="p-2">
        <div class="d-flex">
          <div class="mx-3">
            <img src="/img/Imagen-de-perfil.jpg" alt="Imagen de perfil" class="nav-img" >
          </div>
          <div class="w-75">
            <h3 class="card-title">${dataObj.nombre}</h3>
            <h5 class="text">${texto.value}</h5>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex fecha-hora">
                <p class="m-0 px-1">${fecha}</p>
                <p class="m-0 px-1">--- ${tiempo}</p>
              </div>
              <div>
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-bookmark px-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  contenedor.innerHTML=cards

  texto.value=''

  arrayCards.unshift(cards)

  localStorage.setItem('cards', arrayCards)
}

const crearPublicacionConFoto=()=>{
  const data = localStorage.getItem('usuario')
  const dataObj = JSON.parse(data)

  const texto = document.getElementById('input-text-img')
  const area = document.getElementById('publicaiones-nuevas')
  const previsualizacionImg=document.getElementById('img-previsualizacion')


  const imgPublicacion = document.getElementById('img-publicacion')
  const publicaion = imgPublicacion.files
  const primerarchivo = publicaion[0]
  const url = URL.createObjectURL(primerarchivo)


  const date = new Date()
  const fechaNumero=date.toLocaleString('sp',  {day: 'numeric'} )
  const fechaMes=date.toLocaleString('sp', {month: 'short'})
  const fechaAño=date.toLocaleString('sp', {year:'numeric'})
  const fecha = `${fechaNumero}/${fechaMes}/${fechaAño}`

  const fechahora = new Date()
  let hora = fechahora.getHours() 
  let minuto = fechahora.getMinutes()
  let meridiano = "AM";
  if(hora == 0){
      hora = 12
  }
  if(hora > 12) {
      hora = hora - 12
      meridiano = "PM"
  }
  hora = (hora < 10) ? "0" + hora : hora
  minuto = (minuto < 10) ? "0" + minuto : minuto   
  const tiempo =hora + ":" + minuto + " " + meridiano   

  const contenedor = document.createElement('div')
  area.prepend(contenedor)
  const cards = `
    <div class="publicacion-nueva my-2">
      <div class="p-2">
        <div class="d-flex">
          <div class="mx-3">
            <img src="/img/Imagen-de-perfil.jpg" alt="Imagen de perfil" class="nav-img" >
          </div>
          <div class="w-75">
            <h3 class="card-title">${dataObj.nombre}</h3>
            <h5 class="text">${texto.value}</h5>
            <img src="${url}" alt="" class="w-100" id="foto">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex fecha-hora">
                <p class="m-0 px-1">${fecha}</p>
                <p class="m-0 px-1">--- ${tiempo}</p>
              </div>
              <div>
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-bookmark px-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  contenedor.innerHTML=cards

  previsualizacionImg.classList.add('d-none')
  texto.value=''
  imgPublicacion.value=''

  arrayCards.unshift(cards)

  localStorage.setItem('cards', arrayCards)
}

const cargarCards=()=>{
  const area = document.getElementById('publicaiones-viejas')
  const contenedor = document.createElement('div')
  const regex = /,/gi
  area.prepend(contenedor)
  const card = localStorage.getItem('cards')
  contenedor.innerHTML=card.replace(regex,' ')

  arrayCards.unshift(card)
}
cargarCards()
  
localStorage.setItem('nombre', Carla);
const usuarioLLL = localStorage.getItem('nombre');