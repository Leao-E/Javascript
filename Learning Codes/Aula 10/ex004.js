function somar(){
    var result = document.getElementById("result")
    result.innerHTML = `R: <strong>${Number(document.getElementById("num1").value) + Number(document.querySelector("input#num2").value)}</strong>`
}