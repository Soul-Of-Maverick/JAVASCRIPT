//Enumerating Properties of an Object


function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// enumerate all the members in object we can use for-in
// itarrate object using for-in
for ( let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}


// to get all the keys use Object.keys()
const keys = Object.keys(circle)
console.log(keys);

// check for the existence of a property or a method in a object.
// see if a given property or method exists in an object we use the 'in' operator
if('radius' in circle) console.log('yes');