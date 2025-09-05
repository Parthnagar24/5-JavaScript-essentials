/*The typeof operator in JavaScript is a unary operator that returns a string indicating the type of the operand. It is primarily used for type checking and debugging.

Syntax:

typeof operand


Key Points:

Returns a string describing the type of the operand.

Can be applied to variables, literals, expressions, or functions.

Quirks / Pitfalls:

typeof null returns "object" → legacy bug in JS

Arrays also return "object" → use Array.isArray() to distinguish

Functions return "function" → special case of object

Common Return Values:

Operand	typeof Result
"Hello"	"string"
42	"number"
9007199254740991n	"bigint"
true	"boolean"
undefined	"undefined"
null	"object"
Symbol("id")	"symbol"
{ name: "Alice" }	"object"
[1, 2, 3]	"object"
function() {}	"function"
JavaScript Code Example */

// Primitives
let str = "JS";
let num = 100;
let bigInt = 123n;
let bool = false;
let undef;
let empty = null;
let sym = Symbol("key");

console.log(typeof str);    // string
console.log(typeof num);    // number
console.log(typeof bigInt); // bigint
console.log(typeof bool);   // boolean
console.log(typeof undef);  // undefined
console.log(typeof empty);  // object (quirk!)
console.log(typeof sym);    // symbol

// Non-primitives
let obj = { name: "Alice" };
let arr = [1, 2, 3];
let func = function() { return "Hello"; };

console.log(typeof obj);   // object
console.log(typeof arr);   // object
console.log(typeof func);  // function

// Best practice: checking for arrays
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
