//Hoisting

sayHello();     // no error
sayGoodbye();   // error : sayGoodbye is not defined

//function Declaration
// function declaration are hoisted which means they raise to top of the code
function sayHello() {}

// function Expression
// function expression ends with ;
// function expression are not hoisted
const sayGoodbye = function() {};


// classes
// class declaration/ class expression are not hoisted.

const c = new Circle();     // error : not defined.

// class Declaration
class Circle {
}

// class Expression
const Square = class {
};
