//   Iterating Instance and Prototype Members

function Circle(radius) {
    // instance member
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }

}
// prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);

// returns only instance members
console.log(Object.keys(c1));

// Returns all members (own/instance + prototype)
for (let key in c1) console.log(key);