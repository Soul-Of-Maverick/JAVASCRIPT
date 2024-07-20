//  Exercise - Error Handling

try {
    const number = [1, 2, 3, 4, 1, 1];
    const count = countOccurrences(number, -1);
    console.log(count);
}
catch (e) {
    alert(e);
}



function countOccurrences(array, searchElement) {
    if( !Array.isArray(array))
        throw new Error('Invaild array..');

    const count = array
    .filter(val => val === searchElement)
    .length;
    return count > 0 ? count : 0;
}