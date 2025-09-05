/* 
📌 Scope in JavaScript
Scope determines where variables are accessible in your code.
There are mainly 3 types of scope: Global, Function, and Block.
*/


/* 
1. Global Scope 🌍
- Declared outside of any function or block.
- Accessible anywhere in the program.
- In browsers, global variables become properties of `window`.
*/
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // ✅ Accessible here
}

showGlobal();
console.log(globalVar); // ✅ Accessible here too


/* 
2. Local Scope 🔒
- Declared inside a function or block.
- Accessible only within that function/block.
*/
function showLocal() {
  let localVar = "I am local";
  console.log(localVar); // ✅ Accessible here
}

showLocal();

console.log(localVar); // ❌ Error: localVar is not defined


/* 
3. Function Scope vs Block Scope ✨
- var → Function scoped (ignores blocks like if, for).
- let & const → Block scoped (restricted to { }).
*/
if (true) {
  var x = 10;     // Function scoped
  let y = 20;     // Block scoped
  const z = 30;   // Block scoped
}

console.log(x); // ✅ Works (var escapes block)
console.log(y); // ❌ Error: y is not defined
console.log(z); // ❌ Error: z is not defined
