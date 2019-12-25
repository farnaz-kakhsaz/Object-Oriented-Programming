
// Abstraction:
// Hiding the details and complexity, and showing only the essential parts.
// Now to implement abstraction we use privet properties and methods.

// How to implement private properties and methods when using classes:
// there are basiclly three different appraoches
// 1- (the terrible way) using an underscore as a naming convention. like this (line 20):
// this._radius
// Why this is a terrible approach? Because we can still access this radius from the outside.
// So this is not abstraction this is a convention for developers.
// 2- Use ES6 symbols (primitive type), to implement private properties and methods
// 3- Use Maps to achieve the same thing. (next lecture)

// Symbol is a function we call to generate a symbol. a symbol is essentially a unique identifier.
// every time we call this function we get a new unique identifier. and note that is not a constructor function.
// so we can not new that up (new Symbol();) otherwise we get an error.
// Symbol() === Symbol(); // Output: false because they are not the same.
// So every time we call the Symbol function we get a new unique value. and we can use this unique value
// as the property name for an object.

// Private property:
const _radius = Symbol();
// Private methods:
const _draw = Symbol();

class Circle {
    constructor(radius) {
        // radius proprty is public by defalt. but imagine we want radius property to be private.
        // in JavaScript we have two way to access a property in an object.
        // 1- use dot notation like: this.radius = radius;
        // 2- brakets like: this["radius"] = radius;
        // so this["radius"] === this.radius
        // now we can also use a symbol as a property name instead of a string (this["radius"]).
        this[_radius] = radius;
    } 

    // In ES6 we have this new feature called computed property names.
    // So we can add brakets, add inside of these brakets we add an expression.
    // When that expression is evaluated, the resulting value will be used as name of a property or method.
    [_draw]() {
    } // Output in prototype : Symbol(): ƒ [_draw]()
}

const c = new Circle(1);
// the property name that log in console is Symbol(), but this is just how we see it internally
// the name of the property is a unique value. so if we set multiple properties, using symbols, the property 
// names all show up as symbols, but internally they are unique.
// But this is not seems private! beacuse we still can see it in console! well yes, and no
// no beacuse if I type c.radius or c._radius we don't have that propertys anymore
// so we can not directly access that property in code. but there is a hack around that:
console.log(Object.getOwnPropertyNames(c)); // Output: []
console.log(Object.getOwnPropertySymbols(c)); // Output: [Symbol()]
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); // Output: 1
// But we're not goning to write code like that to access these kind of pricate properties, this is kind of awkward.
// So we can use symbol as a simple way to implement kind of private properties and methods.