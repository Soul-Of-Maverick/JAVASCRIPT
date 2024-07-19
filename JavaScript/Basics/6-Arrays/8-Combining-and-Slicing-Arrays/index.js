// Combining and Slicing Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

// concst first array with second
const combined = first.concat(second);
console.log(combined);

// slice array
// slice will copy array elements from index 2
const slice = combined.slice(2);
console.log(slice);
// slice will copy array elements from index 2 to 4 index
const slice1 = combined.slice(2, 4);
console.log(slice1);
// slice will copy all array elements 
const slice2 = combined.slice();
console.log(slice2);

