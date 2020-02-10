var date = new Date()
var myArgs = process.argv
console.log(myArgs)
console.log(`Agora são ${date.getHours()}:${date.getMinutes()}`)
if(date.getHours()<12){
    console.log("Bom dia")
}else if(date.getHours()<=18){
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}
switch(myArgs[2]){
    case "elogio":
        console.log("Hoje é um dia lindo")
        break
    case "insulto":
        console.log("Hoje tá uma merda")
        break
    case "atrasado":
        console.log("Você acordou tarde hoje")
        break
    default:
        console.log("Tenha um bom dia")
}