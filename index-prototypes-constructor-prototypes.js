let myObj = { name: "farnaz" };

// Object.getPrototypeOf(myObj) = myObj.__proto__ 
// they are prototype or parent of myObj
let prototypes = Object.getPrototypeOf(myObj);
console.log(prototypes)

// Constructor also have prototype property.
// (Because in javaScript functions are objects so they have properties and methods.)
function Circle(radius) {
    this.radius = radius;
}
// What is the prototype properties?!
// It is the object that will be used as the parent 
// for objects created by a Circle constructor.
// so these two are the same:
// let obj = {};
// obj.__proto__ = Object.prototype
// or
// Object.getPrototypeOf(obj) = Object.prototype
Circle.prototype
const circle = new Circle(1);