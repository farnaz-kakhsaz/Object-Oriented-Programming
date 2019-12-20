// function Circle(radius) {
//     this.radius = radius
//     this.draw = function() {
//         console.log("draw")
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log(move);
        }
    }

    draw() {
        console.log("draw");
    }
}


const circle = new Circle(5);