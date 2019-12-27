// Inheritance in Classes:

class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log("move");
    }
}


// To have Circle inheit from the Shape class, all we have to do is to add extends Shape.
// So in class inheritance we don't have to reset the prototype, or reset constructor, it's far easire and cleaner.
class Circle extends Shape {
    // If we add constructor in derived class, inside of this constructor we should make sure to 
    // call parent constructor first, to initialize this base object. otherwise we got an exception (error).
    // For that we can use the "super" keyword to reference the parent object.
    constructor(color, radius) {
        super(color);
        this.radius = radius;
        // We inherited color from our parent class (Shape class), and we added radius on the circle class itself.
    }

    // All methods we implement here will end up in the prototype for Circle.
    draw() {
        console.log("draw");
    }
}


const c = new Circle("red", 1);

// My self: Every time we "extends" a class, in derived class (child class) we must call "super" in constructor to initialize the 
// Because ES6 class constructors MUST call super if they are subclasses.