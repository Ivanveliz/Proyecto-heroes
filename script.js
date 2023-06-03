const nav =  document.querySelector("#container-nav")
const botonAbrir = document.querySelector("#boton-abrir")
const botonCerrar = document.querySelector("#boton-cerrar")
const botonesBarra = document.querySelectorAll(".item-nav")

botonAbrir.addEventListener("click", () =>{
    nav.classList.add("nav-visible")
})

botonCerrar.addEventListener("click", () =>{
    nav.classList.remove("nav-visible")
})

botonesBarra.forEach((boton) =>{
    boton.addEventListener("click", () =>{
      nav.classList.remove("nav-visible")
    })
  })