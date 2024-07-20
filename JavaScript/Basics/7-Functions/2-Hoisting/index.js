// Hoisting
// Hoisting is the process of moving function declarations to the top of the file.

// Function Declaration
walk();         // o/p - walk

function walk() {
    console.log('walk');
}

// Annoymous Function Expression
run();          // o/p - Uncaught ReferenceError: Cannot access 'run' before initialization

const run = function() {
    console.log('run');
};