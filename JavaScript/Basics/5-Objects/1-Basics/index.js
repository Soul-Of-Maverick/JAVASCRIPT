//Basics

// Object-oriented Programming (OOP)
// OOP is basically a style of programming where we see a program as a collection of objects that talk to each other to perform some functionality.
// in Object oriented programming terms, if a function is part of an object, we call the function a method

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();