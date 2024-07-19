//  Reducing an Array

const number = [1, -1, 2, 3];

// reduce()
// two argument to the reduce method
// first argument is a callback function,
// secound argument is initial value for the accumulator.

const sum = number.reduce((accumulator, currentValue) => {
    return accumulator+ currentValue;
}, 0);
console.log(sum);