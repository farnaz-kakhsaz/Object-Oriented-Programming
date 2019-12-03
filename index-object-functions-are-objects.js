// Constructor Function
function Circle(reduis) {
    this.reduis = reduis;
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
