/*
📘 Theory: NaN (Not-a-Number)
- NaN is a special value representing invalid number results (e.g., "abc" * 2).
- Type of NaN is actually "number".
- Problem: NaN !== NaN (it’s the only value in JS that is not equal to itself).

✅ Checking for NaN:
1. isNaN(value) → Converts to number, then checks.
   (Less strict, can give confusing results).
2. Number.isNaN(value) → Strict check for NaN only (Best practice).

▪ Category → Data Types & Special Values
*/

// Example of NaN
console.log("abc" * 2); // NaN
console.log(typeof NaN); // number

// Checking NaN
console.log(NaN === NaN); // false
console.log(isNaN("hello")); // true (coerces string → NaN)
console.log(Number.isNaN("hello")); // false (strict check)
console.log(Number.isNaN(NaN)); // true ✅
