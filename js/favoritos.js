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