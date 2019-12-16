// We want evey shape to have a color property
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
} 

function Circle(radius, color) {
    // This is how to call the super constructor 
    Shape.call(this, color);

    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log("draw");
}

const s = new Shape();
const c = new Circle(1, "red");

console.log("Shape", Object.getPrototypeOf(s));
console.log("Circle", Object.getPrototypeOf(c));