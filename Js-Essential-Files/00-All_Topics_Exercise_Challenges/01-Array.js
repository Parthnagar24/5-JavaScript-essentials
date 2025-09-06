/* JavaScript Array Revision Cheat Sheet */

/* Initial Array */
let arr = [1, 2, 3];

/* 1. push() -> Adds element at the end */
arr.push(4);
console.log("push:", arr); // [1, 2, 3, 4]

/* 2. pop() -> Removes last element */
arr.pop();
console.log("pop:", arr); // [1, 2, 3]

/* 3. shift() -> Removes first element */
arr.shift();
console.log("shift:", arr); // [2, 3]

/* 4. unshift() -> Adds element at beginning */
arr.unshift(0);
console.log("unshift:", arr); // [0, 2, 3]

/* 5. map() -> Transforms each element */
let mapped = arr.map(n => n * 10);
console.log("map:", mapped); // [0, 20, 30]

/* 6. filter() -> Returns elements that match condition */
let filtered = arr.filter(n => n !== 2);
console.log("filter:", filtered); // [0, 3]

/* 7. slice() -> Extracts portion of array */
let sliced = arr.slice(1, 3);
console.log("slice:", sliced); // [2, 3]

/* 8. indexOf() -> Finds first index of element */
console.log("indexOf 3:", arr.indexOf(3)); // 2

/* 9. lastIndexOf() -> Finds last index of element */
let arr2 = [3, 2, 1, 3];
console.log("lastIndexOf 3:", arr2.lastIndexOf(3)); // 3

/* 10. findIndex() -> First index where condition true */
console.log("findIndex 2:", arr.findIndex(n => n === 2)); // 1

/* 11. find() -> First element matching condition */
console.log("find 2:", arr.find(n => n === 2)); // 2

/* 12. includes() -> Checks if element exists */
console.log("includes 3:", arr.includes(3)); // true

/* 13. concat() -> Merges arrays */
let newArr = arr.concat([4, 5]);
console.log("concat:", newArr); // [0, 2, 3, 4, 5]

/* 14. join() -> Joins with separator */
console.log("join ~:", arr.join(" ~ ")); // "0 ~ 2 ~ 3"

/* 15. forEach() -> Iterates array */
arr.forEach(x => console.log("forEach:", x));

/* 16. splice() -> Removes/replaces/adds elements */
let spliceArr = [1, 2, 3];
spliceArr.splice(1, 2, 7, 8); // remove 2 elements, add 7 & 8
console.log("splice:", spliceArr); // [1, 7, 8]

/* 17. reduce() -> Reduces array to single value */
let reduceArr = [1, 2, 3, 4];
let reduced = reduceArr.reduce((x, y) => x + y);
console.log("reduce:", reduced); // 10

/* 18. every() -> True if all match condition */
console.log("every > 0:", arr.every(n => n > 0)); // false

/* 19. some() -> True if at least one matches */
console.log("some == 2:", arr.some(n => n === 2)); // true

/* 20. reverse() -> Reverses array */
console.log("reverse:", [...arr].reverse()); // [3, 2, 0]

/* 21. sort() -> Sorts array (lexical by default) */
console.log("sort:", [...arr].sort()); // [0, 2, 3]

/* 22. at() -> Gets element by index (supports negative) */
console.log("at(-2):", arr.at(-2)); // 2
