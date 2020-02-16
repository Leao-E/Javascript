function parimp(n=NaN){
    if(isNaN(n)){
        return 'NaN'  
    }else if(n%2 != 0){
        return 'impar'
    }else{
        return 'par'
    }
}
function fat(n=0){
    let fat = 1
    n = Math.abs(n)
    if(!isNaN(n)){
        for (let i = 1; i <= n; i++) {
            fat *= i
        }
        return fat
    }
    return NaN
}
function soma(n1=0, n2=0){
    return n1 + n2
}
let args = process.argv
switch (args[2]) {
    case 'soma':
        console.log(`${args[3]} + ${args[4]} = ${soma(args[2], args[3])}`)
        break;
    case 'parimpar':
        console.log(`${args[3]} é ${parimp(Number(args[2]))}`)
        break;
    case 'fat':
        console.log(`${args[3]}! = ${fat(args[3])}`);
        
    default:
        break;
}
