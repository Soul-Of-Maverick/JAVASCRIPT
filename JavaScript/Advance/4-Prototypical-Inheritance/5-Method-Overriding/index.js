//   Method Overriding
// we override a method that is defined in the base object.

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
} 

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
}
// resetting the prototype
extend(Circle, Shape);

// place this method afetr resetting prototype
Circle.prototype.duplicate = function() {
    // calling parent method
    // use call() pass this to access context of current object
    Shape.prototype.duplicate.call(this);

    console.log('Circle duplicate');
}

const c = new Circle();


// console
// c.duplicate()

// o/p
// duplicate
// Circle duplicate