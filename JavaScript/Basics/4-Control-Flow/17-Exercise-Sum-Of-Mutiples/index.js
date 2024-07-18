//Exercise - Sum of Multilples of 3 and 5

// Multiple of 3: 3, 6, 9
// Multiple of 5: 5, 10

console.log(sum(10));

function sum(limit) {
    let sumOfLimit = 0;

    for ( let i = 1; i <= limit; i++)
        if ( (i % 3 === 0) || (i % 5 === 0))
            sumOfLimit += i;
        
    return sumOfLimit;
}