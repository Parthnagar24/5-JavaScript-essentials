/* -------------------------------------------------
   Constructors in JavaScript
   -------------------------------------------------
   - Special functions used with `new` to create and 
     initialize objects.
   - By convention → Capitalized names (Person, Car).
   - Steps when `new` is used:
       1. A new empty object `{}` is created.
       2. The object’s `__proto__` is linked to 
          Constructor.prototype.
       3. The constructor executes with `this` bound 
          to the new object.
       4. If constructor returns a non-primitive 
          object, that object is returned instead of `this`.
---------------------------------------------------*/


/* 1. Constructor Function */
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person("Alice", 25);


/* 2. Prototype Methods (best practice) 
   - Methods inside constructor → memory heavy.
   - Use prototype so all instances share the method.
*/
Person.prototype.sayHello = function() {
    return `Hi, my name is ${this.name}, I'm ${this.age} years old.`;
};
console.log(p1.sayHello());


/* 3. Class Syntax (ES6) 
   - Sugar over constructor + prototype.
   - Cleaner + supports private fields, static methods, 
     inheritance, etc.
*/
class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    study() {
        return `${this.name} is studying ${this.course}`;
    }
}
const s1 = new Student("Charlie", "CSE");
console.log(s1.study());


/* 4. Special Case: Constructor Returning Object 
   - Normally returns `this`.
   - But if you return an object explicitly, it overrides.
*/
function Car(model) {
    this.model = model;
    return { type: "Overridden Object" };
}
const car1 = new Car("Tesla");
console.log(car1); // { type: "Overridden Object" }


/* 5. Private Fields (ES2022+)
   - `#field` creates truly private fields.
   - Not accessible outside the class.
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
const account = new BankAccount(1000);
console.log(account.deposit(500)); // 1500
// console.log(account.#balance); ❌ SyntaxError
