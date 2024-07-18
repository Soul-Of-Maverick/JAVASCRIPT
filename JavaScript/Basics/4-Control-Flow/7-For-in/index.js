// For-in loop
// use to iterate over the properties of an object or elements in an  array.

// iterate over the properties of an object
const person = {
    name: 'sam',
    age: 20
}

for ( let key in person) {
    console.log(key, person[key]);
}


// iterate over elements in an  array
let colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
}