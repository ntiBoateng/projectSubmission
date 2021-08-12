const prompt = require('prompt-sync')({sigint: true});
let Calculator = require('./calculator.js')

let dd = prompt('Do you want to add or product ? ')
if(dd ==='add'){
    let x = prompt('Enter your first number ')
    x=Number(x)
    let y = prompt('Enter your second number ')
    y = Number(y)
    let adds = new Calculator(x,y)
    let ans = adds.add
    console.log('The result is '+ans)
}else if(dd === 'product'){
    let x = prompt('Enter your first number ')
    x=Number(x)
    let y = prompt('Enter your second number ')
    y = Number(y)
    let products = new Calculator(x,y)
    let ans = products.product
    console.log('The result is '+ans)
}
