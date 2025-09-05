// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype
Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Creating instances
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.sayHello()); // Hello, my name is Alice...
console.log(person2.sayHello()); // Hello, my name is Bob...

// Prototype chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Object.create example
const animal = { eats: true };
const dog = Object.create(animal);
dog.bark = function() {
    return "Woof!";
};
console.log(dog.eats); // true (inherited)
console.log(dog.bark()); // Woof!

// ES6 class equivalent (syntactic sugar over prototype)
class Student {
    constructor(name) {
        this.name = name;
    }
    study() {
        return `${this.name} is studying`;
    }
}
const s1 = new Student("Charlie");
console.log(s1.study());
