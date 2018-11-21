
module.exports = class Tape {

    constructor(){
        this.head = 0
        this.symbols = []
    }

    read(){
        return this.symbols[this.head] || 0
    }

    write(symbol){
        this.symbols[this.head] = symbol
    }

    move(direction){
        this.head += direction
    }

}