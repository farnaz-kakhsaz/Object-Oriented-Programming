// Modules:
// Because we don't want to have one giganitc file 
// with hundreds or thousands of lines of code,
// so we split our code into multiple files, 
// and call each of these files a modules.
// This gives us a number of benefits:
// 1- Increase Maintainability 
// 2- Increase Reusability
// 3- Abstract

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}

const c = new Circle(10);
// If in this code I can access _radius WeackMap (in line 11), 
// I can read the radius private property of the circle object like this:
console.log(_radius.get(c)); // And what is returned will be the value of the radius property.
// So we should take _radius and Circle class out of this file, and put it in a separate file
// which we call a module and then only expose the circle class to the outside.
// So this is abstraction
c.draw();

// History of Modules in JavaScript: (1-3 are ES5 module formats)
// In ES5 we didn't have the concept of modules. So smart developer and community
// introduced new syntaxes to define modules. we refer to these syntax's as module formats.
// Popular Module Formats:
// 1- AMD: Asynchronus Module Definition (used in browser applications)
// 2- CommonJs: use in Node.js
// 3- UMD: Universal Module Definition (it can used both in browser and Node.js)
// 4- ES6 Modules: JavaScript in ES6, natively supports a module format (used in borwser)