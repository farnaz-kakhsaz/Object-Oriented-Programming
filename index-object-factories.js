// Factory Funtion
function createCircle(redius){
    return {
        redius,
        draw: function() {
            console.log("draw");
        }
    }
}

const circle = createCircle(1)
circle.draw();

// In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.