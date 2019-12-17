// Polymorphism in action:
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Shape:
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
} 

// Circle:
function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    console.log("duplicate circle");
}

// Square:
function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log("duplicate square")
}

// Now we have two derivatives or child objects. Circle and Square
// Each object will provide a different implementation of the duplicate method.
// so we have many implementations, or many forms of the duplicate method.
// That's what we call polymorphism.

// Now why polymorphism is so powerful?! let me show you:
// Imagine we have an array of shape objects.
const shapes = [
    new Circle(),
    new Square()
]

// Depending on the type of the shape object, a different implementation or a different form of 
// the duplicate method will be called. so if shape is a circle the implementation of duplicate 
// in the circle object will be called. if it's a square, a different implementation will be called.
for(let shape of shapes){
    shape.duplicate() 
    // in console: duplicate circle duplicate square
}
// and why is this so powerful?
// before object-oriented-programming if you want to implement this logic, we will have to write code like this:
for(let shape of shapes){
    if (shape.type === "circle")
        // If the type of object is a circle, then perhaps we'll have functions somewhere else
        // like duplicateCircle we would have to call that function. now this function is not part of any objects
        // It's just a stand alone function. This is non object-oriented way of writing code.
        // In object-oriented-programming we encapsulate our variables and functions into objects.
        duplicateCircle()
    else if (shape.type === "square")
        duplicateSquare()
    else    
        duplicateShape()
    // And what if we have 10 types of shapes?  we would end up with 11 consitional statements in this block
}
// In contrast, when we encapsulate variables and functions into objects, and use inheritance, we can excute
// many forms of a method, using a single line of code. Like this:
// for(let shape of shapes){
//     shape.duplicate() 
// }
// So this is Polymorphism in action.