// This is a little timer with start, stop, reset methods
// with prototype
// But putting all methods in prototype in this example is NOT a good idea
// because it's against Abstraction.

function Stopwatch() {
    let  startTime, endTime, running, duration = 0;

    Object.defineProperties(this, {
        duration: {
            get: function() { return duration; },
            set: function(value) { duration = value}
        },
        startTime : {
            get: function() { return startTime; },
            set: function(value) { startTime = value; }, 
        },
        endTime:{ 
            get: function() { return endTime; },
            set: function(value) { endTime = value}
        },
        running: {
            get: function() { return running; },
            set: function(value) { return running = value}
        }
    });

}

Stopwatch.prototype.start = function() {
    if(this.running)
    throw new Error("Stopwatch has already started.")

    this.running = true;

    this.startTime = new Date()
};

Stopwatch.prototype.stop = function() {
    if(!this.running)
    throw new Error("Stopwatch is not started.")

    this.running = false;

    this.endTime = new Date()

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}


const sw = new Stopwatch();

