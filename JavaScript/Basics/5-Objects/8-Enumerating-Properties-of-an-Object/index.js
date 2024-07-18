//Enumerating Properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// itarrate object using for-in
for ( let key in circle)
    console.log(key, circle[key]);

// to itterate object using for-of we use Object.keys()
for ( let key of Object.keys(circle))
    console.log(key);

//  Object.entries() returns each value pais as an array.
for ( let entry of Object.entries(circle))
    console.log(entry);

// see if a given property or method exists in an object we use the 'in' operator
if('radius' in circle) console.log('yes');