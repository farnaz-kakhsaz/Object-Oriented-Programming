// Private property:
const _radius = new WeakMap();
// Private Method:
const _move = new WeakMap();

// A WeakMap is essentially a dictionary where keys are objects and values can be anything.
// And the reason we call them WeakMaps is because the keys are weak. So if there are no reference
// to these keys, they will be gorbage collector.
 
class Circle {
    constructor(radius) {
        _radius.set(this, radius); // Output: we don't have radius peroperty on hte console.
        // The first argument is the key and key has to be an object, It can not be a symbol.
        // So we pass "this", which reperesent the instance of circle object, that's our key. 
        // And for the value, we use "radius" argument.
        // _move.set(this, function() {
        //     console.log("move", this);
        // })
        // Beacuse body of class executed in strip mode, "this" by default will be set to 
        // undefined as opposed to the global object.
        // and if in move method, we want to access the instance of the circle object,
        // instead of using a regular function we use arrow functions.
        // Because arrow functions use the this value of their containind function.
        // so in this case "this" is not going to be rebund (reset), it's going to be inherited from 
        // what we have in this constructor, so in this constructor "this" references a circle object.
        _move.set(this, () => {
            console.log("move", this);
        })
    }
    
    draw() {
        // If we want to access "radius" property inside of this class we can do something like this:
        // Instead of calling the set method we call the get method, we need to reference a key,
        // In this case the key is the instance of the circle object (this), 
        // and this will return the value of the radius property.
        console.log(_radius.get(this));
        // _move.get(this) returns a function so we can call that function like this _move.get(this)();
        _move.get(this)();
    }
}

const c = new Circle(1);