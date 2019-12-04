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