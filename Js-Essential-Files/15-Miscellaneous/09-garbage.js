/*
📘 Theory: Garbage Collection
- JavaScript has automatic memory management.
- Uses "reachability": objects not referenced are collected.
- Common algorithm: Mark-and-Sweep.
- Devs cannot force GC.

📂 Category → Memory Management
*/

let obj = { name: "temp" };
obj = null; // Now unreachable → eligible for GC
