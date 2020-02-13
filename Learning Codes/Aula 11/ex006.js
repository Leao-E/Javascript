function calcular(){
    var texvel = window.document.querySelector("input#txtvel")
    var res = window.document.querySelector("div#res")
    var vel = Number(texvel.value)
    if(isNaN(vel)){
        window.alert("Insira um valor valido no campo abaixo")
    }else{
        res.innerHTML = `<p>Sua velocidade é de <strong>${vel}</strong></p>`
        if(vel > 60){
            res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
        }
        res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
    }
}