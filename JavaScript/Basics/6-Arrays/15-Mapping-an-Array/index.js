//   Mapping an Array
const number = [1, -1, 2, 3];

const result = number.filter(value => value >= 0);
const items = result.map(value => '<li>' + value + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// MApping an object

const mapItem = result.map(value => ({value: value}));
console.log(mapItem);



// cleaner code
const cleanerCode = number
    .filter(value => value >= 0)
    .map(value => ({value: value}));