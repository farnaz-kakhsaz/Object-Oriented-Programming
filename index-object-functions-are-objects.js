// Constructor Function
function Circle(redius) {
    this.redius = redius;
    this.draw = function() {
        console.log("draw");
    }
}

// these two are the same:
// but I try it they weren't (second one ws undefined)

// new Circle(1) = Circle.call({}, 1)
// Circle(1) = Circle.call(window, 1)

const another = new Circle(1);
another.draw()
