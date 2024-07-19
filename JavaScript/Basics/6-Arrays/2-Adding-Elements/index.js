// Array - Adding new elements

const numbers = [3, 4];

// Adding element at end
numbers.push(5, 6);
// we can pass multiple arguments


// Adding element at Beginning
numbers.unshift(1, 2);

// Adding element at Middle
//ad or remove elements
//splice( starting index, number of elements of delete, adding elements)
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);