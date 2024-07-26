// Modules - split our code into multiple files, each of these files a module.
// benifits
// - increase the maintainability of our application because our code is better organized.
// - reuse one or more of these modules in diffrent parts of an application or in diffrent applications.
// - we can abstract code,so we can apply abstraction principle, we can hide some of the complexity in a module, and only expose the essentials.


// Module formats
// - AMD : Asynchronous module definition - is primarily used in browser applications.
// - commonJS - used in Nod.js
// - UMD : Universal module definition - used both browser and node.js
// - ES6 Modules  - used in browsers

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

const c = new Circle(10);
c.draw();