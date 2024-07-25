// ES6 Classes
// classes are function, they are constructor functions.


// constructor function
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

// classes
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {}       // it prasent in object imstace
    }

    draw() {        // it move inside of prototype
        console.log(draw);
    }
}
const c = new Circle(1);