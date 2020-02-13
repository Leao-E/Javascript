var count = 0
var isInside = false
var a
function main(){
    a = window.document.getElementById("div")
    a.addEventListener('click', clique)
    a.addEventListener('mouseenter', entrou)
    a.addEventListener('mouseout', saiu)
    function clique(){
        count++
        a.innerText = count
    }
    function entrou(){
        isInside = true
        a.innerText = count
    }
    function saiu(){
        isInside = false
        a.innerText=''
    }
}
function keyboard(event){
    if((event.keyCode == 38 | event.keyCode == 39) & isInside){
        count++
        a.innerText = count
    }else{
        if((event.keyCode == 37 | event.keyCode == 40) & isInside){
            count--
            a.innerText = count
        }
    }
}