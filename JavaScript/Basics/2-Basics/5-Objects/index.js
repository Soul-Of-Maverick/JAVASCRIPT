//Reference Type
// - Object
// - Array
// - function

//Object
// {} cruly braces is what we call an object literal
// key are what we call the properties of this object

let person = {
    name: 'sam',
    age: 20
}
console.log(person);

// two ways to change object property
// Dot Notation
person.name = 'Jhon'
console.log(person.name); // accessing property using Dot Notation

//Bracket Notation
person['name'] = 'Mary'
console.log(person['name']); // accessing property using Bracket Notation