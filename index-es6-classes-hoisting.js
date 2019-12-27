// Ways to define functions:

// 1-Function Declaration
function sayHello() {}

// 2-Function Expression
const sayGoodbye = function() {};


// Difference between function declaration and a function expression:

// 1-By convention, with function expressions we should add this semi-colon at the end, 
// but with function declarations we don't add the semi-colon here.
// 2-Function declarations are hoisted which means they raise to the top of the code.
// in contrast, function expressions are not hoisted.

// Class Declaration
class Circle {
}

// Class expression
const Square = class {
} 
// Unlike functions, class declarations or class expressions are not hoisted.


// Which syntax should you use, a class declaration or class expression ?
// Pretty much everyone uses class declaration syntax, so stick to that because it's simpler and cleaner.