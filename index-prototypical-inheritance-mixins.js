// Extract logic to make code readeble
function mixin(target, ...sources) {
    // Rest operator (ES6) in up will collect all the arguments and turn them into array 
    // and because we need sources explicitly so this time we can use spread operator
    // to spread an array into multiple arguments.
    // the syntax is exactly the same, but this time we call this operator spread operator.
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("Eating");
    }
};

const canWalk = {
    walk: function() {
        console.log("Walking");
    }
};

const canSwim = {
    swim: function() {
        console.log("Swimming");
    }
};

// We can use Object.assign to copy the properties and methods from one object to another.
// So in this example {} (empty object) will end up being the combination 
// of these two different objects (canEat and canWalk).
// console.log(Object.assign({}, canEat, canWalk));

function Person() {
}

// We basically modified the prototype of Person, and added the capability to eat and walk.
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

// So next time we create a person object, that person will these capabilities.
const person = new Person();

console.log(person);


function GoldFish(){
}

mixin(GoldFish.prototype, canEat, canSwim);

const goldFish = new GoldFish();

console.log(goldFish);
