/*Type coercion in JavaScript is the automatic or implicit conversion of values from one data type to another during operations.

JavaScript is a weakly typed, dynamic language, so type coercion happens frequently. There are two types:

Implicit Coercion (Type Conversion by JS engine)

Happens automatically.

Common in expressions combining different types.

Examples: string + number, boolean + number, == comparisons.

Explicit Coercion (Manual Conversion)

Done intentionally using functions or operators.

Examples: Number("42"), String(100), Boolean(0)

Rules & Behavior:

Addition + often converts numbers to strings if one operand is a string.

Subtraction -, multiplication *, division / convert strings to numbers if possible.

Falsy values: 0, "", null, undefined, NaN, false → convert to false in boolean context.

Truthy values: Everything else → true in boolean context.

Pitfalls:

== triggers coercion, but === does not (strict equality).

"5" - 2 → 3 (string converted to number)

"5" + 2 → "52" (number converted to string)*/

// Implicit Coercion
console.log("5" + 2);   // "52" (number converted to string)
console.log("5" - 2);   // 3   (string converted to number)
console.log(true + 1);  // 2   (true -> 1)
console.log(false + 5); // 5   (false -> 0)

// Comparisons with coercion
console.log(5 == "5");  // true  (string -> number)
console.log(0 == false); // true (boolean -> number)

// Explicit Coercion
let num = Number("42");      // converts string to number
let str = String(123);       // converts number to string
let boolVal = Boolean(0);    // converts 0 to false
let arrStr = String([1,2,3]); // "1,2,3"

console.log(num, typeof num);       // 42 number
console.log(str, typeof str);       // "123" string
console.log(boolVal, typeof boolVal); // false boolean
console.log(arrStr, typeof arrStr);   // "1,2,3" string
