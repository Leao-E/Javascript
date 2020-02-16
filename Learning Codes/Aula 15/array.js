let num = [0,5,1,-2,7,8]
console.log(`${num}`)
num[5]=7
num.push(8)
console.log(`${num}\n${num.length}`)
num.sort()
console.log(`${num}`)
num.forEach(element => {
    console.log(`${element}`)
});
console.log(num.indexOf(7))
console.log(num.indexOf(3))