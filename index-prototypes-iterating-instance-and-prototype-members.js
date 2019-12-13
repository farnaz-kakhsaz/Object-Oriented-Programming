function Circle(radius) {
    // Instance members
    this.radius = radius;   
    this.move = function() {
        console.log("move")
    }
}

// It doesn't mather when you change the prototype
// we can create object first,
// const c1 = new Circle(1);
// and then modify the prototype.
// Circle.prototype.draw = function() {
    // console.log("draw");
// }
// the draw method will still be available on circle object
// c1.draw()
// Because here we're dealing with object references. so you have a single
// object in memory as soon as we modify that, all the changes are immediately visible.

// Prototype members
Circle.prototype.draw = function() {
    console.log("draw");
}


const c1 = new Circle(1);
// How to iterate over instance (own) vs prototype properties?

// Object.keys only returns instance (own) members
console.log(Object.keys(c1)) // ["radius", "move"]

// for in loob returns all members (instance (own) + prototype)
for(let key in c1) {
    console.log(key) //redius move draw
}

console.log(c1.hasOwnProperty("radius")); // true

console.log(c1.hasOwnProperty("draw")); // false 
// Because this is a prototype member or protorype property


