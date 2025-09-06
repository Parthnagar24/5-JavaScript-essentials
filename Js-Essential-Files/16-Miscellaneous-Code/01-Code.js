/************************************************************
 🔥 Advanced JavaScript Topics (Remaining)
 Theory + Code Examples
************************************************************/

/***********************
 1. Event Loop (Microtasks vs Macrotasks)
***********************/
// - Macrotasks: setTimeout, setInterval, setImmediate (Node.js)
// - Microtasks: Promise callbacks, process.nextTick (Node.js)
// - Microtasks run before macrotasks once call stack is clear.

console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise"));

console.log("End");

/***********************
 2. Closures (Counter Example)
***********************/
// - Closure = function + its lexical scope even after outer function exits.

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log("Closure Counter:", counter(), counter(), counter()); // 1 2 3

/***********************
 3. Hoisting Differences
***********************/
// - Function declarations are hoisted.
// - let/const are hoisted but in Temporal Dead Zone (TDZ).
// - var is hoisted with undefined.

hoistedFunction(); // Works
function hoistedFunction() {
  console.log("I am hoisted");
}

// console.log(a); // ❌ ReferenceError (TDZ)
// let a = 10;

console.log(b); // undefined
var b = 20;

/***********************
 4. OOP with Classes
***********************/
// - class, extends, super, private fields.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  #breed; // private field
  constructor(name, breed) {
    super(name);
    this.#breed = breed;
  }
  speak() {
    console.log(`${this.name} barks (Breed: ${this.#breed})`);
  }
}
const dog = new Dog("Bruno", "Labrador");
dog.speak();

/***********************
 5. Advanced Promises
***********************/
// - Promise.all: waits for all
// - Promise.race: first settles
// - Promise.any: first fulfills
// - Promise.allSettled: waits for all (fulfilled/rejected)

const p1 = Promise.resolve("✅ P1");
const p2 = new Promise((res) => setTimeout(() => res("✅ P2"), 500));
const p3 = Promise.reject("❌ P3");

Promise.all([p1, p2.catch((e) => e)]).then(console.log); // Waits for all
Promise.race([p2, p1]).then(console.log); // First to settle
Promise.allSettled([p1, p3]).then(console.log);

/***********************
 6. Map, Set, WeakMap, WeakSet
***********************/
const myMap = new Map();
myMap.set("key", "value");
console.log("Map get:", myMap.get("key"));

const mySet = new Set([1, 2, 2, 3]);
console.log("Set values:", [...mySet]);

/***********************
 7. Symbols & Iterables
***********************/
// - Symbol is unique
// - Iterators enable custom looping

const sym1 = Symbol("id");
const obj = { [sym1]: 123 };
console.log("Symbol value:", obj[sym1]);

const customIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
for (let val of customIterable) console.log("Iterable:", val);

/***********************
 8. Proxy & Reflect
***********************/
// - Proxy intercepts object operations
// - Reflect provides default behavior

const target = { name: "Parth" };
const proxy = new Proxy(target, {
  get: (obj, prop) => {
    if (prop === "name") return `Mr. ${obj[prop]}`;
    return Reflect.get(obj, prop);
  },
});
console.log("Proxy:", proxy.name);

/***********************
 9. Strict Mode
***********************/
// - Catches silent errors, disallows some bad practices

"use strict";
// x = 10; // ❌ Error in strict mode (undeclared variable)

/***********************
 10. WeakRefs & Memory
***********************/
// - WeakRef: holds weak reference, GC can collect it.

let objRef = { data: "Important" };
const weak = new WeakRef(objRef);
console.log("WeakRef before GC:", weak.deref());
objRef = null;
// Later GC may clean objRef (cannot force)

/***********************
 11. Advanced Errors
***********************/
// - Error subclasses: SyntaxError, RangeError, etc.

try {
  throw new RangeError("This is a range error");
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

/***********************
 12. Web APIs - Fetch & AbortController
***********************/
// - fetch is promise-based
// - AbortController cancels requests

const controller = new AbortController();
fetch("https://jsonplaceholder.typicode.com/todos/1", { signal: controller.signal })
  .then((res) => res.json())
  .then((data) => console.log("Fetch Data:", data))
  .catch((err) => console.log("Fetch Error:", err.name));
controller.abort(); // Cancel immediately

/***********************
 13. New ES Features
***********************/
const value = null ?? "Default"; // Nullish coalescing
console.log("Nullish:", value);

const user = { profile: { name: "Parth" } };
console.log("Optional Chaining:", user.profile?.name);

const bigNum = 123456789012345678901234567890n; // BigInt
console.log("BigInt:", bigNum);

/***********************
 14. Functional Programming
***********************/
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("FP map:", doubled, "filter:", evens, "reduce:", sum);
