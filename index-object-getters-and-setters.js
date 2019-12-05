// function Circle(redius) {
//     this.redius = redius;

//     let defaultLocation = { x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation
//     }

//     this.draw = function() {
//         console.log("draw");
//     }
// }

// const circle = new Circle(1);
// console.log(circle.getDefaultLocation())
// circle.draw();


// But it's better to use another way to access the property, instead of creating and calling method
function Circle(redius) {
    this.redius = redius;

    let defaultLocation = { x: 0, y: 0};

    Object.defineProperty(this, "defaultLocation", {
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if (!value.x || !value.y){
                throw new Error("The type of property are NOT valid.")
            }
            defaultLocation = value
        }
    })

    this.draw = function() {
        console.log("draw");
    }
}

const circle = new Circle(1);
// Set it here
circle.defaultLocation = {x: 15, y: 15}
// Get it here
console.log(circle.defaultLocation )