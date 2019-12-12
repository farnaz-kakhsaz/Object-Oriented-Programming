// Constructor Function
function Circle(redius) {
    this.redius = redius;
    this.draw = function() {
        console.log("draw");
    }
}

const another = new Circle(1);
another.draw()
