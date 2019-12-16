// Make new Square object
function Shape(color) {
    this.color = color;
}
// This two line for setting up the prototype chain is a little bit noisy.
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// So let's refactor and extract, this two line of code:

function extend(Child, Parent) {
    // Note that here the first letter of this parameter is Uppercase,
    // because we are expection these to be constructor functions.
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
// So this extend function is what we call intermediate function inheritance.

Shape.prototype.duplicate = function() {
    console.log("duplicate");
} 

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log("draw");
}

function Square(size) {
    this.size = size
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, "red");
const sq = new Square(10);

console.log("Shape", Object.getPrototypeOf(s));
console.log("Circle", Object.getPrototypeOf(c));