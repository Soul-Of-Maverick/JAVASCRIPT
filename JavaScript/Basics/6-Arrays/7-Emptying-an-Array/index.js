// Emptying an Array

let numbers = [1, 2, 3, 4];
let another = numbers;
// Solution 1
// it works only let and var
numbers = [];
console.log(numbers);
console.log(another);           // not effect to another array

// Solution 2
let numbers1 = [1, 2, 3, 4];
let another1 = numbers;
numbers1.length = 0;
console.log(numbers1);
console.log(another1);


// Solution 3
let numbers2 = [1, 2, 3, 4];
let another2 = numbers2;
numbers2.splice(0,numbers2.length);
console.log(numbers2);
console.log(another2);


// Solution 4
let numbers3 = [1, 2, 3, 4];
let another3 = numbers3;
while (numbers3.length > 0)
    numbers3.pop();

console.log(numbers3);
console.log(another3);
