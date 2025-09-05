/* 
Constructors in JavaScript
--------------------------
- A constructor is a special function used to create and initialize objects.
- By convention, constructor function names start with a capital letter (e.g., Person, Car).
- When you use the `new` keyword:
   1. A new empty object `{}` is created.
   2. That object’s `__proto__` is linked to the constructor function’s prototype.
   3. The constructor runs with `this` bound to the new object.
   4. The new object is returned (unless the constructor explicitly returns another object).
*/


/* 1. Constructor Function */
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person("Alice", 25);


/* 
2. Adding Methods via Prototype
   - Adding methods inside the constructor duplicates them across instances → memory inefficient.
   - Best practice: add shared methods to the prototype.
*/
Person.prototype.sayHello = function() {
    return `Hi, I'm ${this.name}`;
};
console.log(p1.sayHello());


/* 
3. Class Syntax (ES6)
   - `class` is just syntactic sugar over constructor functions + prototypes.
*/
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hi, I'm ${this.name}`;
    }
}
const p2 = new PersonClass("Bob", 30);
console.log(p2.sayHello());


/* 
4. Returning from Constructor
   - Normally, constructors return `this`.
   - If you explicitly return an object, it replaces the instance.
*/
function Car(model) {
    this.model = model;
    return { type: "Overridden Object" }; // overrides instance
}
const c1 = new Car("Tesla");
console.log(c1); // { type: "Overridden Object" }


/* 
5. Private Fields in Constructors (ES2022)
   - Using `#` to create truly private fields.
*/
class BankAccount {
    #balance;
    constructor(initial) {
        this.#balance = initial;
    }
    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
}
const acc = new BankAccount(1000);
console.log(acc.deposit(500)); // 1500
// console.log(acc.#balance); ❌ Error → private field
