var nome = "Hello Povo"
var nomeSplit = nome.split("o")
console.log(nomeSplit[0])
console.log(typeof(nome))
console.log(Number(nome))
var n1 = 134.3
var n2 = "45"
console.log((n1 + n2))
/*O toFixed só pode ser usado se 
  for por um number. Tipo primitivo
  ou objeto???*/
console.log((n1 + Number(n2)).toFixed(3))
/* ES6 */
console.log(`${nome}`)
console.log(`minusculo: ${nome.toLowerCase()} \nmaiuscula: ${nome.toUpperCase()}`)