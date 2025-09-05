/*In JavaScript, variables can be declared using var, let, or const, each with different scopes, hoisting behavior, and mutability.

1. var

Scope: Function-scoped. If declared outside a function, it’s global.

Hoisting: Variables are hoisted to the top of their scope with undefined as initial value.

Reassignment & Redeclaration: Can reassign and redeclare in the same scope.

Pitfall: var can lead to unexpected bugs due to function-scoping and hoisting.

2. let

Scope: Block-scoped (curly braces {})

Hoisting: Hoisted but in Temporal Dead Zone (TDZ) until initialized; cannot access before declaration.

Reassignment: Can reassign but cannot redeclare in the same scope.

Safer alternative to var for most modern JS development.

3. const

Scope: Block-scoped (like let)

Hoisting: Hoisted but in TDZ until initialized

Reassignment: Cannot reassign

Mutability: For objects/arrays, the reference cannot change, but the content can be mutated.

Best for values that should remain constant.*/

// var example
function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // same variable, overwrites outer x
        console.log(x); // 20
    }
    console.log(x); // 20 (function-scoped)
}
varExample();

// let example
function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // different variable, block-scoped
        console.log(y); // 20
    }
    console.log(y); // 10
}
letExample();

// const example
const PI = 3.1416;
console.log(PI); // 3.1416
// PI = 3.14; // Error: Assignment to constant variable

// const with objects
const person = { name: "Alice" };
person.name = "Bob"; // Allowed, mutates object
console.log(person.name); // Bob

// const with arrays
const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
