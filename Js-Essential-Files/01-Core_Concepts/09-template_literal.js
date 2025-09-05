/*Template literals are a modern ES6 feature in JavaScript that allow you to create strings with embedded expressions, multi-line strings, and dynamic content more cleanly than traditional string concatenation.

Key Features:

Backticks ( ): Strings are enclosed with backticks instead of single ' or double " quotes.

Expression interpolation: Use ${expression} to embed variables, expressions, or function calls directly into strings.

Multi-line strings: Strings can span multiple lines without using \n.

Tagged templates (advanced): Allows you to process template literals with a custom function.

Benefits over traditional strings:

Cleaner and more readable syntax compared to string concatenation.

Avoids messy + operators and manual line breaks.

Enables dynamic and computed string generation effortlessly.*/

// Basic template literal
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

// Embedding expressions
let a = 5;
let b = 10;
console.log(`Sum of ${a} + ${b} = ${a + b}`); // Output: Sum of 5 + 10 = 15

// Multi-line strings
let multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);
/* Output:
This is line 1
This is line 2
This is line 3
*/

// Tagged template (advanced)
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => `${acc}${str}<b>${values[i] || ''}</b>`, '');
}

let user = "Bob";
let age = 30;
let result = highlight`Name: ${user}, Age: ${age}`;
console.log(result); // Output: Name: <b>Bob</b>, Age: <b>30</b>
