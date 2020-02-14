var args = process.argv
var count = 0
if (args[2] == null ){
    console.log(`sem repetições`)
    console.log("passo 1")
    console.log("passo 2")
    console.log("passo 3")
    console.log("passo 4")
    console.log("passo 5")
}else if(args[2] == 1 && args[3] != null){
    console.log(`usando while`)
    while(count < args[3]){
        console.log(`c = ${count}`)
        count++
    }
}else if(args[2] == 2 && args[3] != null){
    //executa pelo menos uma vez
    console.log(`usando do while`)
    do{
        console.log(`c = ${count}`)
        count++
    }while(count < args[3])
}