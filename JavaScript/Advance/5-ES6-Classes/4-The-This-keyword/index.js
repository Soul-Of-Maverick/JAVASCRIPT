// This keyword
'use strict';

const Circle = function() {
    this.draw = function() { console.log(this); }
};

const c = new Circle();
// method call : Circle object
c.draw();

const draw = c.draw;
// function call : by default this will point to the global object
draw();     // after use strict instead of getting the window object, we'll get undefined.
// after enable strict mode, if we call a method as a function, this by defalut no longer point to global object i will set to undefined.
// prevent a class from accidentally modifying  the global object,

//-------------------------------------------------------------------------------------

class Circle1 {
    draw() {
        console.log(this);
    }
}
const c1 = new Circle1()
const draw1 = c1.draw;
draw1();    // undefined
// by default, the body of our classes are executed in the stict mode.