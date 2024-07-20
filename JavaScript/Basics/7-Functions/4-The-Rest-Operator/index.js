// The Rest Operator

function sumAll(...args) {
    return  args.reduce((a,b) => a + b);
}
console.log(sumAll(1, 2, 3, 4, 5, 10));


function sumDiscount(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sumDiscount(0.1, 20, 30));
