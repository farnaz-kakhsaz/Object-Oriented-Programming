function Circle(redius) {
    this.redius = redius;

    this.defaultLocation = { x: 0, y: 0};

    this.computeOptimumLocation = function(factory){
        // Do something
    }

    this.draw = function() {
        this.computeOptimumLocation();
        this.defaultLocation.x = 5
        console.log("draw");
    }
}

const circle = new Circle(1);
circle.computeOptimumLocation();
circle.draw();

// There is a problem with this implementation, Not all these members should be accessible
// in object-oriented programming, we have this core concept called abstraction. 
// Abstraction means we should hide the details and complexity and show or expose only the essentials.
// So the second implementation is better:

function Circle(redius) {
    this.redius = redius;

    // Convert to private properties and method (private members)
    let defaultLocation = { x: 0, y: 0};
    let computeOptimumLocation = function(factory){
        // Do something
    }

    this.draw = function() {
        computeOptimumLocation();
        defaultLocation.x = 5
        // this.radius
        console.log(1,this)
        console.log("draw");
    }
}

const circle = new Circle(1);
circle.draw();

// This will work because in JavaScript we have this concept of closure.

// CLOSURE:
// In contrast to scope we have closure, 
// a closure determines what variables will be accessible to an inner function.
// So this function will be able to access all the local variables defined inside it,
// as well as the variables defined in this parent function.
// So these two (computeOptimumLocation and defaultLocation) are the variables that 
// are defined in the parent function.
// They are within the scope of parent function, but within the closure of this inner function.
// Now don't confuse closure with scope, because the scope is temporary and it dies.
// But closure stays there. so the variables will continue to sustain memory.