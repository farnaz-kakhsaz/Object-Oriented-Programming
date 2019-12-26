const _radius = new WeakMap();

class Circle {
    constructor(ratius) {
        _radius.set(this, ratius);
        // Maybe we want to read the (the value of) private property from the outside:
        // 2- But in ES6 we can create a getter and setter much easier (method 3)
        Object.defineProperty(this, "objectRadius", {
            get: function() {
                return _radius.get(this);
            },
            set: function(radius) {
                _radius.set(this, radius)
            }
        })
        

    }
    // 1- not good becuase we call the method to get it, it would be nicer if we could read it like property.
    getRadius() {
        return _radius.get(this);
    }
    // 3- It looks like a method but actually we can access it like a property.
    get radius() {
        return _radius.get(this);
    }
    set radius(value) {
        if (value <= 0) throw new Error("invalid radius")
        _radius.set(this, value);
    }
}

const c = new Circle(1);