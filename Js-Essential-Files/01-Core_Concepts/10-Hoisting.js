/*Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation.

Key points:

Variables (var)

Declarations are hoisted, but initializations are not.

Before initialization, the variable’s value is undefined.

Variables (let and const)

Are hoisted but reside in the Temporal Dead Zone (TDZ).

Accessing them before declaration throws ReferenceError.

Functions

Function declarations are fully hoisted (can be called before declaration).

Function expressions (assigned to variables) follow variable hoisting rules.

Why hoisting exists:

JS compiler interprets code in two phases: compile phase (hoisting) and execution phase.

Hoisting allows functions to be used before they are defined, supporting flexibility in code ordering.*/

// var hoisting
console.log(a); // undefined (declaration hoisted, initialization not)
var a = 10;
console.log(a); // 10

// let and const hoisting
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
const c = 30;
console.log(b, c); // 20 30

// Function declaration hoisting
greet(); // Works even before declaration
function greet() {
    console.log("Hello, Hoisting!");
}

// Function expression hoisting
// greetExp(); // TypeError: greetExp is not a function
var greetExp = function() {
    console.log("Hello from function expression!");
};
greetExp(); // Works after initialization
