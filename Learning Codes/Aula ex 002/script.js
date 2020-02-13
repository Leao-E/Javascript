function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${addZero(hora)}:${addZero(min)}<br/>`
    if (hora >= 0 && hora < 12){
        img.src = "Imagens/manha.png"
        msg.innerHTML += `Bom Dia`
        document.body.style.background = "#bdcbac"
    } else if (hora >= 12 && hora < 18){
        img.src = "Imagens/tarde.png"
        msg.innerHTML += `Boa Tarde`
        document.body.style.background = "#d5a068"
    } else {
        img.src = "Imagens/noite.png"
        msg.innerHTML += `Boa Noite`
        document.body.style.background = "#003c62"
    }
}
function addZero(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i
  }