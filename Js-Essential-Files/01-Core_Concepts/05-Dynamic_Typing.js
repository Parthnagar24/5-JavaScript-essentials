/* Dynamic typing is a programming language feature where the type of a variable is determined at runtime rather than at compile time. In JavaScript:

Variables do not have a fixed type.

The type of a variable can change during execution depending on the value assigned.

The interpreter automatically handles type conversion (implicit coercion) when required.

Key Points:

Flexibility: You can assign a string, number, or object to the same variable.

Runtime type determination: Type errors are only detected when the code is executed, not during compilation.

Implicit coercion: JavaScript often converts types automatically during operations, e.g., "5" + 2 → "52".

Caution: Dynamic typing increases flexibility but can lead to subtle bugs if types are not checked.*/

let data = 10;      // data is a number
console.log(typeof data); // number

data = "Hello JS";  // data is now a string
console.log(typeof data); // string

data = true;        // data is now a boolean
console.log(typeof data); // boolean

// Implicit type coercion
let result = "5" + 2; 
console.log(result); // "52" (string)
console.log(typeof result); // string

result = "5" - 2;  
console.log(result); // 3 (number)
console.log(typeof result); // number
