//  Testing the Elements of an Array

const number = [1, 2, 3, 4];

// every() - checks to see if every elemen in a given array matches the given criteria
// return false after encounter first element false the condition
const allPositive = number.every(value => value >= 0);
console.log(allPositive);

// some() - checks to see if we have at least one element that matches the given criteria
// return ture after encounter first element matches the criteria
const atLestOnePositive = number.some(value => value >= 0);
console.log(allPositive);