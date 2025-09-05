/*
📘 Theory: Modules in JavaScript

▪ A Module → Self-contained, reusable piece of code (functions, classes, variables, objects).  
▪ Purpose:
   - Organize code across multiple files.
   - Improve reusability & maintainability.
   - Prevent global namespace pollution.

✨ Export
   - Named Export → Multiple exports from one file.
   - Default Export → Only one export per file.

📥 Import
   - Import specific exports → import { add } from './file.js';
   - Import with alias → import { add as sum } from './file.js';
   - Import all → import * as math from './file.js';
   - Import default → import greet from './file.js';

🌍 Types of Modules
   - ES6 Modules (import/export) → Modern standard (browser & Node with `"type":"module"` in package.json).
   - CommonJS (require/module.exports) → Older Node.js system.

▪ Category → Code Organization & Reusability (Modular Programming).
*/

// ------------------- Example 1: Named Export -------------------
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './mathUtils.js';
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

// ------------------- Example 2: Default Export -------------------
// greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

// main.js
import greet from './greet.js';
console.log(greet("Parth")); // Hello, Parth!

// ------------------- Example 3: Import with Alias -------------------
import { add as sum } from './mathUtils.js';
console.log(sum(10, 20)); // 30

// ------------------- Example 4: Import All -------------------
import * as math from './mathUtils.js';
console.log(math.add(2, 3));      // 5
console.log(math.subtract(7, 2)); // 5

// ------------------- Example 5: CommonJS (Node.js old style) -------------------
// mathUtils.cjs
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

// main.cjs
const math = require('./mathUtils.cjs');
console.log(math.add(5, 5)); // 10
