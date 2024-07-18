// Constructor Function.
// A constructor is a special function that creates and initializes an object instance of a class.
// Naming convention is Pascal notation

function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle1 = new CreateCircle(2);
console.log(circle1);


// when we use the new operator, 3 thing happen
// This operator first creates an empty object 
// then it will set this to points to this object
// finaly it will return thatobject from this function.