// Four Pillers of OOP


// Procedural Programming - that divided a program into a set of functions.
// you have data stored in abunch of variable and functions that operate in that data.
// cons: 
// function with so many parameters

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
//--------------------------------------------------------------------

// Object Oriented Programming - we combine a group of related variable and functions into a unit.
// we call that uint an object. we refer to these variables as properties and the functions as methods.

// Four Pillers of OOP

// - Encapsulation 
// - Abstraction
// - Inheritance
// - Polymorphism
//--------------------------------------------------------------------

// - Encapsulation : 
//in Object -oriented programming we group related variables, and functions that operate on them into objects.
let employe = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + ( this.overtime * this.rate);
    }
};
employe.getWage();
//--------------------------------------------------------------------

// - Abstraction
// simpler Interface - we can hide some properties and methods from outside, and this gives us a couple benefits.
// reduce the impact of change - change inner or private methods. none of these changes will leak to outside.
//--------------------------------------------------------------------

// - Inheritance
// mechanism that allows you to eliminate redundant code.
//--------------------------------------------------------------------

// - Polymorphism
// more forms
// polymorphism is a technique that allows you to getrid of long if and else or switch case statements

//--------------------------------------------------------------------

// Benefits of OOP

// - Encapsulation : reduce complexity + increase reusability 
// - Abstraction : reduce complexity + isolate impact of changes
// - Inheritance : eliminate redundant code
// - Polymorphism : refactor ugly switch/case statements