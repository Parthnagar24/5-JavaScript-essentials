/* Data Types in JS

In JavaScript, data types define the type of data that can be stored in a variable. JavaScript has two main categories of data types:

Primitive (immutable) data types – Stored directly in the stack memory. They are immutable, meaning their value cannot be changed once created.

->String – Sequence of characters
->Number – Numeric values (integers and floats)
->BigInt – Very large integers beyond Number.MAX_SAFE_INTEGER
->Boolean – true or false
->Undefined – A variable declared but not assigned
->Null – Represents an intentional absence of value
->Symbol – Unique and immutable identifier (ES6+)

Non-primitive (reference) data types – Stored in heap memory, variables hold a reference to the actual object.

->Object – Key-value pairs
->Array – Ordered list of values
->Function – First-class object that can be stored in variables, passed, and returned
->Date, Map, Set, etc. – Built-in complex objects

Key characteristics:

->Primitive types are copied by value.
->Non-primitive types are copied by reference, meaning two variables can point to the same object.
->JavaScript is dynamically typed, so a variable can hold any data type without explicit declaration.  */


// Primitive types
let str = "Hello, JS";        // String
let num = 42;                 // Number
let bigInt = 9007199254740991n; // BigInt
let bool = true;              // Boolean
let undef;                    // Undefined
let empty = null;             // Null
let sym = Symbol("id");       // Symbol

console.log(typeof str);      // Output: string
console.log(typeof num);      // Output: number
console.log(typeof bigInt);   // Output: bigint
console.log(typeof bool);     // Output: boolean
console.log(typeof undef);    // Output: undefined
console.log(typeof empty);    // Output: object (JS quirk)
console.log(typeof sym);      // Output: symbol

// Non-primitive types
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4];              // Array
let func = function() { console.log("Hello"); }; // Function

console.log(typeof obj);   // Output: object
console.log(typeof arr);   // Output: object (arrays are objects)
console.log(typeof func);  // Output: function

// Reference behavior
let obj2 = obj;
obj2.name = "Bob";
console.log(obj.name); // Output: Bob (because obj2 references the same object)
