// Finding Elements (Reference Types)

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

// find() returns first element that matches 
const result = courses.find(function(course) {
    return course.name === 'a';
})

console.log(result);

// findIndex() returns first element that matches 
const result1 = courses.findIndex(function(course) {
    return course.name === 'a';
})

console.log(result1);