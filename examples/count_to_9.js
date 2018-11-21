
const TuringMachine = require('../src/TuringMachine')

const machine = new TuringMachine([
    {
        0: [0,1,0],
        1: [0,2,0],
        2: [0,3,0],
        3: [0,4,0],
        4: [0,5,0],
        5: [0,6,0],
        6: [0,7,0],
        7: [0,8,0],
        8: [0,9,0],
        9: [null,9,0]
    }
])

machine.run(() => console.log(machine.tape.symbols))