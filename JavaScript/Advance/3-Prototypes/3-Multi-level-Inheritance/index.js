//  Multi-level Inheritance

function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(10);

// every time we call the circle constructor to create a new circle object,
// this constructor will create a new object and set it's prototype property to circle

// object created by the given constructor will have the same prototype.
// all array constructor will have the same prototype.