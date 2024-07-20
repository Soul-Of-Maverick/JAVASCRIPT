//  Property Descriptors

let person = { name: 'sam'};

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable:false
});

person.name = 'jhon';   // can't change name
delete person.name;     // not delete attribute

console.log(Object.keys(person));