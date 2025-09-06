/* 
====================================
 Prototypes in JavaScript
====================================
- JavaScript is a prototype-based language.
- Objects can inherit properties/methods via the prototype chain.
- Every function (except arrow functions) has a `prototype` property.
- Every object has an internal [[Prototype]] (accessible via __proto__).
- If a property/method is not found, JS looks up the prototype chain until it finds it (or reaches null).
*/

/*------------------------------------------------------
 1. Prototype of an Object
------------------------------------------------------*/
const obj = {};
console.log(obj.__proto__); // Points to Object.prototype


/*------------------------------------------------------
 2. Function Prototype
------------------------------------------------------*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
console.log(Person.prototype); // Prototype object with constructor property


/*------------------------------------------------------
 3. Adding Methods to Prototype
   - If we define methods inside constructor, each instance gets its own copy.
   - Better approach: attach methods to prototype, so they are shared.
------------------------------------------------------*/
Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.sayHello()); 
console.log(person2.sayHello()); 


/*------------------------------------------------------
 4. Prototype Chain
   person1 → Person.prototype → Object.prototype → null
------------------------------------------------------*/
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true


/*------------------------------------------------------
 5. Overriding Prototypes
   - You can override built-in or custom prototype methods.
------------------------------------------------------*/
Person.prototype.toString = function() {
    return `Person: ${this.name}, Age: ${this.age}`;
};
console.log(person1.toString()); 


/*------------------------------------------------------
 6. Object.create()
   - Creates a new object with a specific prototype.
------------------------------------------------------*/
const animal = { eats: true };
const dog = Object.create(animal);
dog.bark = function() {
    return "Woof!";
};

console.log(dog.eats); // true (inherited from animal)
console.log(dog.bark()); // Woof!


/*------------------------------------------------------
 7. ES6 Class Syntax (syntactic sugar over prototypes)
------------------------------------------------------*/
class Student {
    constructor(name) {
        this.name = name;
    }
    study() {
        return `${this.name} is studying`;
    }
}

const s1 = new Student("Charlie");
console.log(s1.study()); // Charlie is studying
