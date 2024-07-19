//Finding Elements (Primitives)

const numbers = [1, 2, 3, 1, 4];

// indexOf() - will return the index of this element, not exits return -1
console.log(numbers.indexOf(2));
// search will start from 2 index
console.log(numbers.indexOf(1, 2));

console.log(numbers.lastIndexOf(1));


console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));
