function toggleMode(){
  const html = document.documentElement

    if(html.classList.contains("light")){
      html.classList.remove("light")
    } else {
      html.classList.add("light")
    }

    //imagem
    const img = document.querySelector("#profile img");
     if(html.classList.contains("light")){
      img.setAttribute("src","assets/assets/avatar-light.png")
     }else{
      img.setAttribute("src","assets/assets/avatar.png")
     } 
}
