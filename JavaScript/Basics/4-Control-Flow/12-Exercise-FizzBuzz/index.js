//Exercise - FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// NOt a number => 'Not a number'

const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(number) {
    if ( typeof(number) !== 'number') 
        return NaN;

    if (( number % 3 === 0) && ( number % 5 === 0))
         return 'FizzBuzz';

    if ( number % 5 === 0) 
        return 'Buzz';

    if ( number % 3 === 0) 
        return 'Fizz';

    return number;
}
