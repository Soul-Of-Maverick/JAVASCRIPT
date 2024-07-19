// Exercise - Count Occurrences

const number = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(number, -1);
console.log(count);

function countOccurrences(array, searchElement) {
    const count = array
    .filter(val => val === searchElement)
    .length;
    return count > 0 ? count : 0;
}