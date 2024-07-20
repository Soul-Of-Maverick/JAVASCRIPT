//  Abstraction
// hide the details , show the essentials
// by making them as local variable or method

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 1};

    let computeOptimumLocation = function() {
        //...
    };

    this.draw = function() {
        computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();

