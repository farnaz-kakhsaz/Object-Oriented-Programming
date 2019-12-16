function Shape() {}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
} 

function Circle(radius) {
    this.radius = radius;
}

// Before line 14, our Circle.prototype (or Circle base) was:
// Circle.prototype = Object.create(Object.prototype); //ObjectBase
// We reset circle.prototype to this new object
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    console.log("draw");
}

s = new Shape();
c = new Circle(1);

console.log("Shape", Object.getPrototypeOf(s));
console.log("Circle", Object.getPrototypeOf(c));