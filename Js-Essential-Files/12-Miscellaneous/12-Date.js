/*
📘 Theory: Date
- JavaScript Date object handles dates & times.
- Can represent current or custom timestamps.

📂 Category → Built-in Objects
*/

const now = new Date();
console.log(now.toString()); // Current date & time

const specific = new Date("2025-09-05");
console.log(specific.getFullYear()); // 2025
console.log(specific.getMonth() + 1); // 9 (months are 0-based)
