
const TuringMachine = require('../src/TuringMachine')

const machine = new TuringMachine([
    {
        null: [1,1,1],
        0: [1,1,1],
        1: [1,2,1],
        2: [1,3,1],
        3: [1,4,1],
        4: [1,5,1],
        5: [1,6,1],
        6: [1,7,1],
        7: [1,8,1],
        8: [1,9,1],
        9: [0,0,-1], // when reach 9 move to left and increment
    },
    {
        null: [0,null,-1], // if the cell is empty then return back to the left
        $: [1,null,1] // if the cell is not empty then move to the right
    }
])

machine.run(100,() => console.log(machine.tape.toString()))