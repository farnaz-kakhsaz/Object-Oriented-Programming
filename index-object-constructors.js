// Constructor Function
function Circle(reduis) {
    this.reduis = reduis;
    this.draw = function() {
        console.log("draw");
    }
}

const another = new Circle(1);

