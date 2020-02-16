var numeros = []
function valorValido(n){
    if(isNaN(n) || n<1 || n>100){
        return false
    }else{
        return true
    }
}
function max_min(n){
    n.sort(sortNumber)
    return [n[0], n[n.length - 1]]
}
function media(n){
    return soma(n)/n.length
}
function soma(n){
    let total = 0
    n.forEach(element => {
        total += Number(element)
    })
    return total
}
function sortNumber(a, b){
    return a - b
}
function addNumber(){
    let res = document.querySelector('div#res')
    let input = document.querySelector('input#inputNumber')
    let tabela = document.querySelector('select#txtSelect')
    res.innerHTML=``
    if(valorValido(Number(input.value)) && numeros.indexOf(input.value) == -1){
        let item = document.createElement('option')
        item.text = `${input.value} adicionado com sucesso`
        numeros.push(input.value)
        tabela.appendChild(item)
    }else{
        window.alert(`${input.value} não é um valor valido\nInsira um valor valido e tente novamente`)
    }
}
function final(){
    if (numeros.length == 0){
        window.alert('Nenhum número foi adicionado\nInsira novos valores e tente novamente')
    }else{
        let res = document.querySelector('div#res')
        let maxMin = max_min(numeros)
        res.innerHTML = `Ao todo temos ${numeros.length} valores<br/>
                        O maior valor foi ${maxMin[1]}<br/>O menor valor foi ${maxMin[0]}<br/>
                        A soma de todos os valores é ${soma(numeros)}<br/>
                        A média dos valores foi ${Number.parseInt(media(numeros))}`
    }
}