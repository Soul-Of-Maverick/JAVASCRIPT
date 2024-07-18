//Cloning an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// old way to achive cloning
const another = {};
for ( let key in circle)
    another[key] = circle[key];

console.log(another);

// modren ways
// Object.assign
const newObject = Object.assign({}, circle);

// spread operator
const newObj = {...circle};

