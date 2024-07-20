// Arguments

function sum(a, b) {
    return a + b;
}

console.log(sum());         // o/p - NaN
console.log(sum(1));         // o/p - NaN
console.log(sum(1, 2, 3, 4));         // o/p - 3


function sumAll() {
    let total = 0;
    for ( let value of arguments)
        total += value;
    return total;
}

console.log(sumAll(1, 2, 3, 4));