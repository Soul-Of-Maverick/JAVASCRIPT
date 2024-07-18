// Dynamic nature of objects
// once you create them you can always add new properties or matheds, or remove existing ones

const circle = {
    radius: 1
};

// Adding new property to object
circle.color = 'yellow'; 
// Adding new method to object
circle.draw = function() {
    console.log("draw");
}

// delete a member from a circle object
delete circle.color;

console.log(circle);
