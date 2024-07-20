// Funtion are Objects

function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle1 = new CreateCircle(2);

CreateCircle.name 
//Returns name of the Object

CreateCircle.length
//Returns numbers of arguments

createCircle.constructor
// we have onother built in constructor called functon, 
// and when we declare a function using this syntax, internally,
// JS engine will use this function constructor to create this object. 