JavaScript has three ways to declare variables: var, let, and const. They differ mainly in scope, re-declaration, mutability, and hoisting.

| Feature            | `var`                                | `let`                                 | `const`                               |
| ------------------ | ------------------------------------ | ------------------------------------- | ------------------------------------- |
| **Scope**          | Function-scoped                      | Block-scoped                          | Block-scoped                          |
| **Re-declaration** | ✅ Allowed in same scope              | ❌ Not allowed                         | ❌ Not allowed                         |
| **Re-assignment**  | ✅ Allowed                            | ✅ Allowed                             | ❌ Not allowed (value fixed)           |
| **Hoisting**       | Hoisted (initialized as `undefined`) | Hoisted (but in *temporal dead zone*) | Hoisted (but in *temporal dead zone*) |
| **Best Use Case**  | Legacy code only                     | When variable will change             | When variable should stay constant    |

----------------------------------------------------------------------------------------------------------------------------------------------------------

// 1. var → Function-scoped
function demoVar() {
  if (true) {
    var x = 10;
    console.log("Inside block:", x); // 10
  }
  console.log("Outside block:", x); // 10 (still accessible!)
}
demoVar();

// 2. let → Block-scoped
function demoLet() {
  if (true) {
    let y = 20;
    console.log("Inside block:", y); // 20
  }
  // console.log("Outside block:", y); // ❌ ReferenceError
}
demoLet();

// 3. const → Block-scoped & immutable binding
const z = 30;
console.log("Initial const:", z); // 30
// z = 40; // ❌ TypeError: Assignment to constant variable

// BUT const does not make objects immutable
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed
console.log("Modified object:", person);

// Hoisting Demo
console.log(a); // undefined (var is hoisted)
var a = 5;

// console.log(b); // ❌ ReferenceError (temporal dead zone)
// let b = 10;
