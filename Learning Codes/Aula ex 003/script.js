function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoInput = document.querySelector("input#anoNas")
    var res = document.querySelector("div#res")
    var sex = document.getElementsByName("sex")
    var idade = ano-Number(anoInput.value)
    if (anoInput.value.length == 0 || Number(anoInput.value) > ano){
        window.alert(`[ERRO] Ano valido\nPreencha os campos e tente novamente`)
    } else {
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.setAttribute("style", "width: 250px; height: 250px; border-radius: 250px; margin-top: 10pt; box-shadow: 0px 0px 10px #c7c8ca;")
        var genero = ``
        if(sex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 4){
                img.setAttribute("src", "Imagens/bebe-m.png")
            } else if (idade >= 4 && idade < 14){
                img.setAttribute("src", "Imagens/crianca-m.png")
            } else if (idade >= 14 && idade < 18){
                img.setAttribute("src", "Imagens/adolescente-m.png")
            } else if (idade >= 18 && idade < 30){
                img.setAttribute("src", "Imagens/jovem-adulto-m.png")
            } else if (idade >= 30 && idade < 50){
                img.setAttribute("src", "Imagens/adulto-m.png")
            } else {
                img.setAttribute("src", "Imagens/idoso-m.png")
            }
        }else if(sex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 4){
                img.setAttribute("src", "Imagens/bebe-f.png")
            } else if (idade >= 4 && idade < 14){
                img.setAttribute("src", "Imagens/crianca-f.png")
            } else if (idade >= 14 && idade < 18){
                img.setAttribute("src", "Imagens/adolescente-f.png")
            } else if (idade >= 18 && idade < 30){
                img.setAttribute("src", "Imagens/jovem-adulto-f.png")
            } else if (idade >= 30 && idade < 50){
                img.setAttribute("src", "Imagens/adulto-f.png")
            } else{
                img.setAttribute("src", "Imagens/idoso-f.png")
            }
        }
        if(idade < 120){
            res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
        }else{
            if(window.confirm(`${idade} anos... Você é um fantasma?`)){
                img.setAttribute("src", "Imagens/fantasma.png")
                res.innerHTML = `Fatasma detectado.<br/>`
            }else{
                res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
            }
            
        }
        res.style.textAlign = "center"
        res.appendChild(img)
    }
}