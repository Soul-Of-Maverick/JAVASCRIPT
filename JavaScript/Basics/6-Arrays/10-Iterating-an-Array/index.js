// Iterating an Array

const numbers = [1, 2, 3, 4];

for (let number of numbers)
    console.log(number);


// forEach- we acn get value and index
numbers.forEach(number => console.log(number));

numbers.forEach((number, index) => console.log(index,number));