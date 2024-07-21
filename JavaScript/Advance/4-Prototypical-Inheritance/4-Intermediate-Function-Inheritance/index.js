//   Calling the Super Constructor

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}


function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
} 


function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius; 
}

Circle.prototype.draw = function() {
    console.log('draw');
}

extend(Circle, Shape);


function Square(size) {
    this.size = size;
}

extend(Square, Shape);


const s = new Shape();
const c = new Circle(1, 'red');
const square = new Square(10); 