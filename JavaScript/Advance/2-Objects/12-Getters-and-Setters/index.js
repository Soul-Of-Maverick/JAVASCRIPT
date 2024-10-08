//  Abstraction
// hide the details , show the essentials
// by making them as local variable or method

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() { 
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location..');

            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();

