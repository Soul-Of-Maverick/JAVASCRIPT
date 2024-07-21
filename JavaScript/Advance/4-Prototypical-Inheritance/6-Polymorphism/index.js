//   Polymorphism
// poly means many, morph means form

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
} 

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}


function Circle() {
}
// resetting the prototype
extend(Circle, Shape);

// place this method afetr resetting prototype
Circle.prototype.duplicate = function() {
    console.log('Circle duplicate');
}


function Square() {    
}

extend(Square, Shape);

// place this method afetr resetting prototype
Square.prototype.duplicate = function() {
    console.log('Square duplicate');
}


const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes)
    shape.duplicate();