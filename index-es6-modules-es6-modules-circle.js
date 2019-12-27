const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}

// By default everything that we define here is considered private,
// unless we explicitly export it using the export keyword.