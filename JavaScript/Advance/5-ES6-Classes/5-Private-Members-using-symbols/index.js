// Private Members Using Symbols
// using an underscore as a naming convention.
// symbol
// WeakMap

const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        // using an underscore as a naming convention.
        // this._radius = radius;

        // Symbol
        this[_radius] = radius;
    }
    // computer property names
    [_draw]() {
    }
}

const c = new Circle(1);
