//  Adding or Removing Properties

function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);


// adding properties into object
circle.location = { x: 1};

const propertyName = 'center location';
circle[propertyName] = {x: 1};

// delete prperties
delete circle['center location'];