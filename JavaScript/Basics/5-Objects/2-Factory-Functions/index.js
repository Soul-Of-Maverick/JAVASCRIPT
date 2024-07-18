// Factory Function
// a factory function is a function that returns an object. 
// It is a way of creating and returning objects in a more controlled and customizable manner.
// naming convention is camel notation

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);