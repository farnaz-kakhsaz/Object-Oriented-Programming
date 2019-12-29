import {Circle} from "./index-es6-modules-es6-modules-circle.js";
// But we get error on console "SyntaxError", the proper way to fix this issue is 
// using webpack, But for now we just add type="module" to sctipt element.
// But we get new error so we add .js to end of the import address.

const c = new Circle(10);
c.draw();