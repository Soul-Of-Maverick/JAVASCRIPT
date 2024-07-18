//Logical Operators with Non Booleans

// Falsy (false)
// Falsy values in js
// undefined
// null 
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy


console.log(false || false )    // o/p - true
console.log(false || 'MOsh' )    // o/p - 'Mosh'
console.log(false || 1 )    // o/p - 1

// Short-circuiting
console.log(false || 1 || 2 )    // o/p - 1
