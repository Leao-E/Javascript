function tabuada(){
    let num = document.querySelector("input#num")
    let tab = document.querySelector("select#tabuada")
    tab.innerHTML=``
    if(num.value.length === 0){
        window.alert("[ERRO] Por favor digite um numero")
    }else{
        num = Number(num.value)
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            tab.appendChild(item)
        }
    }
    tab.classList.add("visivel")
}