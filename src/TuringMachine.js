
module.exports = class TuringMachine {

    constructor(program){
        this.tape = new Tape()
        this.program = program
        this.state = 0
    }

    compute(){
        const state = this.program[this.state]
        const instr = state[this.tape.read()]
        this.state = instr[0]
        this.tape.write(instr[1])
        this.tape.move(instr[2])
    }

    run(){
        while(this.state != null)
            this.compute()
        return this.tape.symbols
    }

}