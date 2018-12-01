# turing-machine

The purpose of this repo is demonstrate my implementation of a Turing Machine.

The nature of computation has been on my mind recently. What are the common aspects to all things that can compute? While pondering this I came to a realization that made the idea behind the Turing Machine clear. With this new understanding I rendered the idea into code to prove to myself that it worked. The examples prove that it does.

Examples were borrowed from [here](http://math.hws.edu/eck/js/turing-machine/TM.html).

The Turing Machine is an imaginary machine, which I believe implements the core priciples of computation. If a system has mutable state and a mapping for state mutation then the system is computable. The Turing Machine's tape is the mutable state and the program is the mapping for state mutations. _Mappings are the state transitions_. Unlike many computations that happen in the natural word, Turing was able to show using the Universal Turing Machine that any set of mappings could be loaded into the computable system. I can only consider the human brain as being the only other system that can load and compute any set of mappings. However, the brain has one more advantage over the Universal Turing Machine - it is able to create its own mappings.
