function carregar() {
  let msg = document.querySelector("div#msg")

  let img = document.querySelector("img#imagem")

  let date = new Date() //date e um metodo, lembrar de sempre por os parenteses
  let horas = date.getHours() // getHours também e um metodo 

  if (horas >= 0 && horas < 12) {
    msg.innerHTML = `São  ${horas} horas, bom dia`
    img.src = `../img/manha.png`
    document.body.style.background = "#e2cd9f"

  } else if (horas >= 12 && horas < 18) {
    msg.innerHTML = `São ${horas} horas, boa tarde`
    img.src = `../img/tarde.png`
    document.body.style.background = "#b9846f"

  } else {
    msg.innerHTML = `São ${horas} horas, boa noite`
    img.src = `../img/noite.png`
    document.body.style.background = "#515154"
  }
}
