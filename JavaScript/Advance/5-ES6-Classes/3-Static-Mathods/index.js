// In classical Object-oriented language we ahve two types of methods.
// Static Methods
// Instance Methods

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Instance method
    draw() {
    }

    //static method
    // used to create utility functions.that are not tied to a perticular object.
    // is accessible on the class Reffrence
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
 }

 const circle = Circle.parse('{"radius": 1}');
 console.log(circle);