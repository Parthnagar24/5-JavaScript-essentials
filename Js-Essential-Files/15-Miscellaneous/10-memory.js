/*
📘 Theory: Stack vs Heap
- Call Stack → manages function execution (LIFO order).
- Heap → memory for objects, arrays, references.

📂 Category → Memory & Execution Context
*/

function a() {
  let x = 10; // Stored in stack
  let obj = { y: 20 }; // Object in heap, reference in stack
}
a();
