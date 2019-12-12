// Problem
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log("draw");
//     }
// }

// Every time we create new object we copies all these (same) methods (functions)
// in  memory, and it's a wate a lot of memory.

// Solution:
// We know how to prototypical inheritance work.
// When we want to access a property or a method on an object, javaScript engine first
// looks at the object itself, if it can't find that property or method, it will look at the
// prototype of that object. so we can take this "draw" method out of the circle object,
// and put it in it's prototype. we're going to have a single instance of this prototype in the
// memory which we call circle base, so we're goning to have a single instance of the "draw" method.
// we know thay are the same: Circle.prototype === c1.__proto__

// So we have two kinds of properties and methods in JavaScript: 1-Instance 2-prototype
function Circle(radius) {
    // 1.Instance members
    this.radius = radius;   
}

// Because javaScript objects are dynamic. so we can always add something to theme later.
// 2.Prototype members
Circle.prototype.draw = function() {
    console.log("draw");
}


const c1 = new Circle(1);
const c2 = new Circle(1);

// for example we can over write "toScring" method in the prototype of our circle objects.
Circle.prototype.toString = function() {
    return "Circle with radius " + this.radius
}