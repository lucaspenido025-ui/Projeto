function togglemode() {
  const hltml = document.documentElement
  hltml.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (hltml.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/imagem light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/Imagem Avatar.png")
  }
}
