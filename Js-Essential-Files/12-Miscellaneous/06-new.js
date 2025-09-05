/*
📘 Theory: new Keyword
- Used to create an instance of a constructor function or class.
- Steps performed internally:
  1. Creates a new empty object.
  2. Links the object’s __proto__ to the constructor’s prototype.
  3. Executes the constructor function with `this` bound to the new object.
  4. Returns the new object automatically.

▪ Category → Object Creation / Constructors
*/

function Person(name) {
  this.name = name;
}

const p1 = new Person("Parth");
console.log(p1.name);  // ✅ Output: Parth
