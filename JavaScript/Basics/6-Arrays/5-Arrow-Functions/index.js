// Arrow Functions

const cources = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const result = cources.find(cource => cource.name === 'a');

console.log(result);