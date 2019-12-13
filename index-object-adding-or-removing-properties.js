// Constructor Function
function Circle(redius) {
    this.redius = redius;
    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(10);

// Adding Property
circle.location = {x: 1} // circle["location"]
console.log(circle)

// Removing Property
delete circle.location
console.log(circle)
