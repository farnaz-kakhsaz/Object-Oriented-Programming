// Constructor Function
function Circle(redius) {
    this.redius = redius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(10);

// Enumerate all the members in an object
for ( let key in circle) {
    console.log(key, circle[key])
}

// If one want properties of object not methods
for ( let key in circle) {
    if (typeof circle[key] !== "function"){
        console.log(key, circle[key])
    }
}

// Another approach to get all the keys in an object (as the array). 
// With this approach we can't separate the properties from methods. 
let keys = Object.keys(circle);
console.log(keys)

// Check if an object has a given property or method
if ( "draw" in circle) {
    console.log("Circle has a redius.")
}