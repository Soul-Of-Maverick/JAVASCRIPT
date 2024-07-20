//  Constructor Prototypes

Object.getPrototypeOf(myObj);
// myObj.__proto__ ( parent of myObj)
// Constructor.prototype ()
// obj __proto__ and constructor prototype are equall 

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype
// object that will be used as the parent for objects created by a circle constructor.

const circle = new Circle(1);