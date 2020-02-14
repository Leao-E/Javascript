function contar(){
    let inicio = document.querySelector("input#inicio")
    let fim = document.querySelector("input#fim")
    let passo = document.querySelector("input#passo")
    let res = document.querySelector("div#res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados\nPreencha os dados e tente novamente`)
        res.innerHTML = 'Impossivel contar'
    }else if(passo.value <= 0){
        window.alert(`[ERRO] O passo não pode ser nulo ou negativo`)
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = `Contando: <br/>`
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (inicio < fim){
            for (inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio}  `
                if(inicio+passo > fim){
                    res.innerHTML += `\u{1F3C1}`
                }else{
                    res.innerHTML += `\u{1F449}`
                }
            }
        }else{
            for (inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += `${inicio}  `
                if(inicio-passo < fim){
                    res.innerHTML += `\u{1F3C1}`
                }else{
                    res.innerHTML += `\u{1F449}`
                }
            }
        }
        
    }
}