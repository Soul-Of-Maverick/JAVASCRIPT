// Default Parameters

//the function parameter a default value, make sure that parameter is the last parameter in the list,
// give all the parameter after that a default value
function intrest(principal, rate = 3.5, years =5) {
    return principal * rate / 100 * years;
}
console.log(intrest(10000));


// we can pass like this but this is not a good way
function intrest1(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}
console.log(intrest1(10000, undefined, 5));