
module.exports = class Tape {

    constructor(){
        this.head = 0
        this.symbols = {}
    }

    read(){
        const symbol = this.symbols[this.head]
        return symbol == undefined ? null : symbol
    }

    write(symbol){
        if(symbol != null)
            this.symbols[this.head] = symbol
    }

    move(direction){
        this.head += direction
    }

    toString(){
        return Object.keys(this.symbols)
            .map(head => this.symbols[head])
            .reverse()
            .toString()
    }

}