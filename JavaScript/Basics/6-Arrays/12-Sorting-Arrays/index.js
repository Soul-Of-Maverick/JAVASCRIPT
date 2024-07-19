//  Sorting Arrays

const number = [3, 1, 2, 5, 4];

// sort() - it converts each elements here to a string and then sorts the elements in array
console.log(number.sort());


number.reverse();
console.log(number);


// sort abjects 
const courses = [
    {is: 1, name: 'Node.js'},
    {is: 2, name: 'Javascript'}
];

courses.sort((a, b) => {
    if ( a.name < b.name) return -1;
    if ( a.name > b.name) return 1;
    return 0;
});
console.log(courses);