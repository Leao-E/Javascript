//aritmetica
console.log("Operadores aritmeticos:")
console.log(5+2)
console.log(5-2)
console.log(5/2)
console.log(Number.parseInt(5/2))
console.log(5%2)
console.log(5**2)
console.log(`1+3/2-1: ${1+3/2-1}\n(1+3)/(2-1): ${(1+3)/(2-1)}\n1+(3/2)-1: ${1+(3/2)-1}`)
if((1+3/2-1)==(1+(3/2)-1)){
    console.log("1+3/2-1 é igual a 1+(3/2)-1")
}
//atribuicao
var a = 5+3
var b = a%5
var c = 5*b**2
var d = 10-a/2
var e = 6*2/d
var f = b%e+4%e
var g = f
//auto-atribuicao
g = g + 2
g*=2
g/=2
g+=2
g-=2
g**=2
g%=34
//incremento
g++
g--
console.log(a, b, c, d, e, f, g)