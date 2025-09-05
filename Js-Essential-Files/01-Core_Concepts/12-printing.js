/*1. console.log() – Standard Debug Output

Used in Node.js, browsers, and most JS environments.

Prints values to the console.

Can handle strings, numbers, objects, arrays, template literals.*/
console.log("Hello, JavaScript!");   // string
console.log(5 + 10);                 // arithmetic result
console.log({name: "Alice", age: 25}); // object


/*2. console.error() & console.warn()

Used for error or warning messages.*/
console.error("This is an error!"); // red output in console
console.warn("This is a warning!"); // yellow/orange output


/*3. alert() – Browser Pop-up

Shows a popup dialog in browsers.

Only works in browser environment, not Node.js.*/
alert("Hello from JS!"); 


/*4. document.write() – Direct HTML Writing

Writes directly into HTML page.

Mostly deprecated for modern apps; use only for simple demos.*/
document.write("Hello HTML World!");

/*5. prompt() – Input + Output

Used in browsers to take input from users and optionally display it.*/
let name = prompt("Enter your name:");
console.log(`Hello, ${name}!`);

/*6. Node.js Specific

process.stdout.write() – prints without newline in Node.js.*/
process.stdout.write("Hello "); 
process.stdout.write("World!\n"); 
