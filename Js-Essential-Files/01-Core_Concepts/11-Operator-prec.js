
/*
Arithmetic: + - * / % **

Assignment: =, +=, -=, *=, /=, %=

Comparison: ==, ===, !=, !==, >, <, >=, <=

Logical: &&, ||, !

Unary: ++, --, +, -, typeof, delete

Ternary: condition ? value1 : value2

Bitwise: &, |, ^, ~, <<, >>, >>>


Operator Precedence

Determines order of evaluation.

() > * / % > + - > < > <= >= > == != === !== > && > || > =

Use parentheses to ensure clarity.*/

 Arithmetic & assignment
let x = 5;
x += 10; // 15
console.log(x * 2); // 30

// 9. Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// 10. Ternary
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor"); // Adult

// 11. Bitwise operators
console.log(5 & 3); // 1
console.log(5 | 3); // 7

// 12. Operator precedence
console.log(2 + 3 * 4); // 14
console.log((2 + 3) * 4); // 20
console.log("Result: " + 5 + 10); // "Result: 510"
console.log("Result: " + (5 + 10)); // "Result: 15"