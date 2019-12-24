// "use strict"

const Circle = function() {
    this.draw = function() { console.log(this);}
}
const c = new Circle();
// Method Call: Because we are calling method on object. so "this" will point to "c" object, which is our circle object.
c.draw(); // Output: Circle {draw: f()
// Because "this" will point to that circle object.

// But we can do something intersting. instead of calling this draw method like this c.draw(),
// we can get a reference to this method, store it in this constant called draw. note that we are not
// calling this method. we are simply getting a reference to this method.
const draw = c.draw;
console.log(draw); // Output: ƒ () { console.log(this);}

// Function call: Because we're calling "draw()" like stand alone fuction that is not part of an object.
draw(); // Output: window object (but why???)
// So when we call this method (draw()) as a function, by default "this" will point to the global object 
// which is window in the browser, and global in node.
// We know when we use a "new" operator, this new operator will create a new empty object and set "this" in constructor function,
// to point to that object. and if we forget to use the "new" operator, "this" by default will point to the global object,
// which is window in the browser, or global in node. 
// We have exactly the same principle here. so when we call draw as a method on an object,
// "this" will point to that object, and if you call this method as a stand alone function,
// "this" will point to the global object.

// in JavaScript we have strict mode, when we enable this mode, JavaScript engine will be more
// sensitive, so it will do more error checking if there are errors that silently fail, it's going to turn them into exceptions,
// and also it will change the behavior of the "this" keyword in functions.
// so if we enable the stric mode by adding "use strict" to the top of page, you will see that 
// insread of getting the window object here (line 18) draw(), we'll get undefined.
// so if we enable strict mode, if we call a method as a function, "this" by default will no longer point to the global object,
// it will be set to undefined. and the reason for this is to prevent us from accidentally modifying the global object,
// because that's bad practice.


// Create class whitout using "use strict" mode
class Circle2 {
    draw() {
        console.log(this);
    }
}

// Create an object:
const c2 = new Circle2();
// Get a reference to the draw method:
const draw2 = c2.draw;
// And call it like a function:
draw2(); // Output: undefined (why)
// Because by default, the body of our classes are executed in the strict mode.
// and thid prevent us from accidentlly modifying the global object.