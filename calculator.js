class Calculator {
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    get add(){
        return this.x + this.y
    }
    get product(){
        return this.x * this.y
    }
}
module.exports = Calculator;
