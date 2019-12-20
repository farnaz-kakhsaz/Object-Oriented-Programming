// How to override method?
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log("duplicate");
} 

function Circle() {

}

extend(Circle, Shape);
// It is important to defiend new duplicate method after resetting the prototype.
Circle.prototype.duplicate = function() {
    // Sometime you may want to call the implementation on the parent object as well.
    Shape.prototype.duplicate.call(this)
    console.log("duplicate circle");
}

const c = new Circle();
