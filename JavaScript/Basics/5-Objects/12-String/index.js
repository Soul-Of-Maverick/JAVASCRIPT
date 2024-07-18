// String

// String primitive
const message = ' This is my first message ';

console.log(message.trim());        // o/p- This is my second message
console.log(message.length);        // o/p- 24
console.log(message[0]);        // o/p- T
console.log(message.includes('my'));        // o/p- true
console.log(message.startsWith('This'));        // o/p- true
console.log(message.startsWith('this'));        // o/p- false
console.log(message.endsWith('e'));        // o/p- true
console.log(message.indexOf('my'));        // o/p- 8
console.log(message.replace('first', 'second'));        // o/p- This is my second message
console.log(message.toUpperCase());        // o/p- THIS IS MY FIRST MESSAGE
console.log(message.split(' '));        // o/p-  ['', 'This', 'is', 'my', 'first', 'message', '']

// String object
const another = new String('hi');