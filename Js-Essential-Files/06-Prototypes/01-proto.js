/* 
Prototypes in JavaScript
------------------------
- JavaScript is a prototype-based language.
- Objects can inherit properties and methods from other objects via the prototype chain.
- Every function (except arrow functions) has a `prototype` property, used when the function acts as a constructor with `new`.
- Every object has an internal hidden property called [[Prototype]] (accessible as `__proto__`).
- If a property/method is not found on the object, JavaScript looks up the prototype chain until it finds it (or reaches null).
*/


/* 1. Prototype of an Object */
const obj = {};
console.log(obj.__proto__); // Points to Object.prototype


/* 2. Function Prototype */
function Person(name) {
    this.name = name;
}
console.log(Person.prototype); // Prototype object with constructor property


/* 
3. Adding Methods to Prototype
   - Defining methods inside constructor creates duplicates for each instance.
   - Better approach: attach methods to prototype so all instances share them.
*/
Person.prototype.sayHello = function() {
    return `Hi, I'm ${this.name}`;
};
const p1 = new Person("Alice");
console.log(p1.sayHello()); // "Hi, I'm Alice"


/* 
4. Prototype Chain
   Instance (p1) → Person.prototype → Object.prototype → null.
   This is how JS finds properties/methods.
*/


/* 
5. Overriding Prototypes
   - You can override prototype methods for customization.
*/
Person.prototype.toString = function() {
    return `Person: ${this.name}`;
};
console.log(p1.toString());


/* 
6. Object.create()
   - Creates a new object with a specific prototype.
*/
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // inherited from animal


/* 
7. Class Syntax (ES6 sugar over prototypes)
   - Classes in JS are syntactic sugar over prototype-based inheritance.
*/
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hi, I'm ${this.name}`;
    }
}
