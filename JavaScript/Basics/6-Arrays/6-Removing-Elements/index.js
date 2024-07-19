// Removing Elements

const numbers = [1, 2, 3, 4, 5, 6];

// End
// pop() to remove last element in array
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const beginning = numbers.shift();
console.log(numbers);
console.log(beginning);


// Middle
const middle = numbers.splice(2, 1);
console.log(numbers);
console.log(middle);