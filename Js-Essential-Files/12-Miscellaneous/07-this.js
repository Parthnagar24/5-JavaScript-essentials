/*
📘 Theory: this Keyword
- Refers to the object that is executing the function.
- Determined at CALL time, not at definition time.
- Special case: Arrow functions → don’t have their own `this`; they inherit from parent scope.

▪ Category → Functions & Execution Context
*/

const obj = {
  name: "Parth",

  // Regular function → `this` = caller object
  regularFn: function () {
    console.log(this.name);
  },

  // Arrow function → `this` = parent scope (NOT the object)
  arrowFn: () => {
    console.log(this.name);
  },
};

obj.regularFn(); // ✅ Output: Parth
obj.arrowFn();   // ❌ Output: undefined
