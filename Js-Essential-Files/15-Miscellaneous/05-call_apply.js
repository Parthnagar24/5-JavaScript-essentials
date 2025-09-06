/*
📘 Theory: call() vs apply()
- Both are used to invoke a function immediately while setting its `this` context.
- Difference lies in how arguments are passed:

  ▪ call(thisArg, arg1, arg2, ...) → arguments passed individually
  ▪ apply(thisArg, [arg1, arg2, ...]) → arguments passed as an array

- Useful for method borrowing and explicit `this` binding.

▪ Category → Functions & `this` keyword
*/

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user = { name: "Parth" };

// Using call()
greet.call(user, "Hello", "!");  
// ✅ Output: Hello, Parth!

// Using apply()
greet.apply(user, ["Hi", "!!"]); 
// ✅ Output: Hi, Parth!!
