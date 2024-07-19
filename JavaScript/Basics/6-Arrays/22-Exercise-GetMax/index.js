//  Exercise - Get Max

const number = [1, 2, 3, 4];

const max = getMax(number)
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((acc, cur) => acc > cur ? acc : cur);
    
}