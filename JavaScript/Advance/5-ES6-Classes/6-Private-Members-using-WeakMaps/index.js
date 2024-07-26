// Private Members Using WeakMaps.
// A weakmap is essentially a dictionary wher keys are objects and values can be anything.
// eys are weak, so if there are no references to these keys, they will be garbaage collector.

const _radius = new WeakMap();
const _move = new WeakMap();
class Circle {
    constructor(radius) {
        _radius.set(this, radius);      // this is represents the instance of circle object,
    
        _move.set(this, () => {
            console.log('move', this);
        });
    }
    // access a privte property
    draw() {
        console.log(_radius.get(this));

        _move.get(this)();
        console.log('draw');
    }
}

const c = new Circle();