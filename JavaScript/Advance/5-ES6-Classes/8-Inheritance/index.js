// Inheriatnce

class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        // calling super constructor - must call otherwise get error.
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 23);