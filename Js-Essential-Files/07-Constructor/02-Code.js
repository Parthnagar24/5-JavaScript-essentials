// 1. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype (efficient way)
Person.prototype.sayHello = function() {
    return `Hi, my name is ${this.name}, I am ${this.age} years old.`;
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.sayHello());
console.log(person2.sayHello());

// 2. ES6 Class (syntactic sugar for constructor + prototype)
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

// 3. Special case: constructor returning an object
function Car(model) {
    this.model = model;
    return { type: "Overridden Object" };
}
const car1 = new Car("Tesla");
console.log(car1); // { type: 'Overridden Object' }

// 4. Private fields in ES2022+
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
