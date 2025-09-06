/*
📘 Theory: Function.prototype.bind()
- The .bind() method creates a new function with `this` permanently set to the provided value.
- Useful when passing methods as callbacks where `this` might be lost.
- Unlike call/apply, bind does not immediately execute → it returns a new function.

▪ Syntax: func.bind(thisArg, arg1, arg2, ...)
▪ Category → Functions & `this` keyword
*/

const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const greetFn = person.greet;
greetFn(); // ❌ "Hello, I'm undefined" (this lost)

const boundGreet = person.greet.bind(person);
boundGreet(); // ✅ "Hello, I'm Alice"
