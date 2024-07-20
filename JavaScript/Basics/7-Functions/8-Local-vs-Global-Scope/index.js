// Local vs Global Scope

// The scope of the constant is limited to the block in which it's defined,
// we connot access this let/constant outside of the function.

const color = 'red';

function start() {
    const message = 'hi';
    // local variable or local constants in afunction,take precedence over global variables or constants. 
    const color = 'blue';
    console.log(color);
}


function stop() {
    const message = 'bye'; 
}

start();