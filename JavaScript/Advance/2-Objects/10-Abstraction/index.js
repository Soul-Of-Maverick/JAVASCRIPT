//  Abstraction
// hide the details , show the essentials

function Circle(radius) {
    this .radius = radius,

    this.defaultLocation = { x: 1, y: 1},

    this.computeOptimumLocation = function() {

    },

    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);

