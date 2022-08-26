const buttonOpen = document.querySelector(".open-menu")
const buttonClose = document.querySelector(".close-menu")
const links = document.querySelector(".container-links")
const main = document.querySelector("main")

buttonOpen.addEventListener("click", () => {
  buttonOpen.classList.add('hide')
  buttonClose.classList.remove("hide")
  links.classList.remove("hide")
  main.classList.add("hide")

})

buttonClose.addEventListener("click", () => {
  buttonClose.classList.add("hide")
  buttonOpen.classList.remove("hide")
  links.classList.add("hide")
  main.classList.remove("hide")
})