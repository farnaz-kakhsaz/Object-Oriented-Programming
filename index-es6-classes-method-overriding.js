// Method Overriding:
// When we have a method in a base class, or base object, 
// but we want to change it's implementation in a derived class, or a derived object.

class Shape {
    move() {
        console.log("move");
    }
}

class Circle extends Shape {
    // So simply buy creating a methud in derived class (child) with same method name
    // that we use in parent class we can override the method.
    move() {
        // But if I want to reuse some of the code that implemented in the parent, super keyword.
        // So we can access the base object using super keyword.
        super.move();
        console.log("circle move");
    }
    // And the reason for that goes back to our prototypical inheritance, so when we access
    // c.move() JavaScript engine, first looks for this method on the circle object itself.
    // and if in the object can't find the method, JavaScript engine looks at the prototype
    // for this object.
    // But note that this object has it's own prototype, and in this prototype we have another
    // move method, and that is a move method implemented in the shepe class.
    // Now when accessing a property or a method, because JavaScript engine walka up this tree,
    // from the child all the way to parent, the child move method will accessible first.
}

const c = new Circle();

// Mayself: The super keyword is used to access and call functions on an object's parent.