
let counter = 0;


function add () {
    updateDisplay(++counter)
}

function decrement () {
    updateDisplay(--counter)
}

function reset () {
    counter = 0
    updateDisplay(counter)
}



function updateDisplay (val) {
    document.getElementById('counters').innerHTML = val
}