//Values v/s Reference Types

// Value types
// Number, String, Boolean, Symbol, undefined, null
// Primitives are copied by their value 

let x = 10;
let y = x;

x = 20;
console.log(x);     // o/p - 20
console.log(y);     // o/p - 10

// other example
let number = 10;

function increase(number) {
    number++;
}
increase(number);
console.log(number);        // o/p 10



//Reference Types
// object, Function, Array
// Objects are copied by their reference

let a = { value: 10};
let b = a;

a.value = 20;

console.log(a);     // o/p - 20
console.log(b);     // o/p - 20

// other example
let obj = {value: 10}

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);        // o/p 11