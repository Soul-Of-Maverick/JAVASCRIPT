//  Prototype vs. Instance Members 

// two kind of properties and methods in JavaSccript
// - instance propety and methods
// - prototype property and methods


function Circle(radius) {
    // instance member
    this.radius = radius;

    this.move = function() {
        // instance method we can reference a prototype member
        // this.draw();
        console.log('move');
    }

}
// prototype members
Circle.prototype.draw = function() {
    
    //prototype method we can refrence a instance member
    this.move();
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);


