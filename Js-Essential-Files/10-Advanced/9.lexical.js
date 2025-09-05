/*
📘 Theory: Lexical Scope
- Scope is determined by where a function is written (compile time).
- Functions remember variables from their outer scope.

📂 Category → Functions & Scope
*/

function outer() {
  const x = 10;
  function inner() {
    console.log(x); // Looks up in outer scope
  }
  inner();
}
outer(); // ✅ 10
