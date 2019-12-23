
// In classical object-oriented languages, we have two types of methods:
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // 1-Instance Method:
    // Because this method is available on an instance of a class, which is an object.
    // so if we create a circle object:
    // const circle = new Circle(1);
    // if we console.log it on the instance of circle object we have the draw method
    draw() {

    }

    // 2-Stacit Method:
    // We can also assign a method to the class function itself, not to its "prototype".
    // Static methods are available on the class itself. not the object instance.
    // we often use them to create utility functions that are not specific to a given object.
    // With "static" keyword, the method (here parse method) will no longer be available on a circle object.
    // so we won't have circle.parse(), it doesn't exist. but it accessible on the class reference so Circle.parse(), it's here.
    // so, with this method, we are not working with a particular circle object, we're working with a Circle class itself.
    // so to call static methods we don't have to create an instance of a class.
    static parse(string) {
        const radius = JSON.parse(string).radius
        return new Circle(radius)
    }

}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
// so one more time, we use static methods to create utility functions that are not tied to a particular object.


// Math is a JavaScript built in object. and when we use Math we don't say "new Math"
// we directly access these methods on the Math object itself. so here Math looks like a class.
// so if we want to implement Math in ES6 classes, this is how we would do it.

class Math2 {
    static abs(value) {
        // ...
    }
}

Math2.abs();
// so in this example we're not working with a particular object here.
// this "abs" is a utility funtion that takes an input and returns something.
