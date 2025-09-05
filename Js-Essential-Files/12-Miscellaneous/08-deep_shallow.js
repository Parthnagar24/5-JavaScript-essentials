/*
📘 Theory: Deep vs Shallow Copy
- Shallow Copy → copies only top-level properties; nested objects remain referenced.
- Deep Copy → full independent clone of all nested objects.

📂 Category → Objects & Memory Management
*/

const obj1 = { a: 1, b: { c: 2 } };

// Shallow copy
const shallow = { ...obj1 };
shallow.b.c = 99;
console.log(obj1.b.c); // ❌ 99 (because reference copied)

// Deep copy
const deep = JSON.parse(JSON.stringify(obj1));
deep.b.c = 50;
console.log(obj1.b.c); // ✅ 99 (independent)
