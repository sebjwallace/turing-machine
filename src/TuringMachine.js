
const Tape = require('./Tape')

module.exports = class TuringMachine {

    constructor(program){
        this.tape = new Tape()
        this.program = program
        this.state = 0
    }

    compute(){
        const state = this.program[this.state]
        const instr = state[this.tape.read()]
        this.tape.write(instr[1])
        this.tape.move(instr[2])
        return this.state = instr[0]
    }

    run(callback){
        while(this.compute() != null)
            callback && callback()
        return this.tape.symbols
    }

}