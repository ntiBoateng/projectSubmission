const prompt = require('prompt-sync')({sigint: true});
let impt = require('./calculator.js')

let dd = prompt('Do you want to add or product ?')
if(dd ==='add'){
    let x = process.argv[2]
    let y = process.argv[2]
    let adds = new Calculator(Number(x),Number(y))
    let ans = adds.add
    console.log('The result is '+ans)
}else if(dd === 'product'){
    let x = process.argv[2]
    let y = process.argv[2]
    let products = new Calculator(Number(x),Number(y))
    let ans = products.product
    console.log('The result is '+ans)
}
