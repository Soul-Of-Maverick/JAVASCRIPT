//Exercise - Max of Two numbers
// Write a function that takes two numbers and returns the maximum of the two.

function maxOfTwoNumber(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}
let number = maxOfTwoNumber(10,15);
console.log(number);