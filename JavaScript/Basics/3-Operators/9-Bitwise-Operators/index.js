//Bitwise Operators

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2);     // Bitwise OR  o/p - 3
console.log(1 & 2);     // Bitwise AND  o/p - 0

// real time exp
// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermissiion = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermissiion;

let message = 
    ( myPermission & readPermission) ? 'yes' : 'no';

console.log(message);
