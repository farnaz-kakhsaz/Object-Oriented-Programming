// Factory Funtion
function createCircle(reduis){
    return {
        reduis,
        draw: function() {
            console.log("draw")
        }
    }
}

const circle = createCircle(1)
circle.draw();