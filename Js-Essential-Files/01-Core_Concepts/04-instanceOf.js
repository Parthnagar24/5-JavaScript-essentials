/* InstanceOF operator

The instanceof operator in JavaScript is used to check whether an object is an instance of a specific constructor or class. It evaluates to a Boolean (true or false).*/

/*
How it works internally:

JavaScript checks the prototype chain of the object.

If constructor.prototype exists anywhere in the object’s prototype chain, instanceof returns true.

Otherwise, it returns false.

Key Points:

instanceof is for objects, not primitives.

It respects inheritance, including ES6 classes and traditional constructor functions.

Helps distinguish objects created from different constructors.

Common Use Cases:

Checking object types at runtime.

Differentiating between objects, arrays, and custom classes.

Validating inputs in functions.**/

// Constructor function
function Person(name) {
    this.name = name;
}

const alice = new Person("Alice");

console.log(alice instanceof Person); // true

// ES6 class
class Animal {
    constructor(species) {
        this.species = species;
    }
}

const dog = new Animal("Dog");
console.log(dog instanceof Animal);   // true
console.log(dog instanceof Object);   // true (all objects inherit from Object)

// Built-in types
const arr = [1, 2, 3];
console.log(arr instanceof Array);    // true
console.log(arr instanceof Object);   // true
console.log(arr instanceof Function); // false

// Primitive vs Object
const num = 42;
console.log(num instanceof Number);   // false (primitive)
console.log(new Number(42) instanceof Number); // true (object wrapper)
