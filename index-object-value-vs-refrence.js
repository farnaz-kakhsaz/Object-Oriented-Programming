//  Passing by value
let numberOne = 10;

function increase(numberOne) {
    numberOne++;
}

increase(numberOne);
console.log(numberOne) // Output 10

// ***

// in this way it increase
let numberTwo = 10;

function increaseTwo() {
    numberTwo++;
}

increaseTwo(numberTwo);
console.log(numberTwo) // Output 11

// --------------------------- //
// Passing by reference
let obj = { value: 10 }

function increaseThree(obj) {
    obj.value++
}

increaseThree(obj)
console.log(obj)

