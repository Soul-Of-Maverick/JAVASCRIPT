//  Resetting the Constructor
// every obejct in JS has a constructor property, that returns the function that was used to construct or create that object.


function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}
// befor
//Circle.prototype.constructor = circle;
// new Circle.prototype.constructor() => new Circle();
Circle.prototype = Object.create(Shape.prototype);
// best pratice to set constructor function afetr reseting
Circle.prototype.consttructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw');
}

const s = new Shape();
const c = new Circle();