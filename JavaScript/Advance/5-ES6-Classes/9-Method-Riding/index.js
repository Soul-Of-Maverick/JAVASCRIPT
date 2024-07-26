// Method overriding

class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        // when we need to access base class method
        super.move();
        console.log('circle move');
    }
}

const c = new Circle();