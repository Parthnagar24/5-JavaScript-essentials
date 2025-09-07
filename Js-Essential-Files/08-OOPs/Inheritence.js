/*2. Inheritance is another pillar of OOP that allows one class (child) to reuse and extend the functionality of another class (parent).

Definition: Inheritance enables new classes to be created from existing ones, so they inherit properties and methods from the parent but can also override or extend behavior.

JavaScript specifics:

Uses the extends keyword for class-based inheritance.

Under the hood, inheritance in JS relies on the prototype chain: every object has an internal link ([[Prototype]]) pointing to another object.

super() is used inside a child class constructor to call the parent’s constructor.

Benefits:

Code reusability.

Polymorphism (child classes can modify behavior).

More structured and DRY (Don’t Repeat Yourself) code..*/

// filename: inheritance.js

// Parent class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} started`);
  }

  stop() {
    console.log(`${this.brand} stopped`);
  }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand); // Calls Vehicle constructor
    this.doors = doors;
  }

  honk() {
    console.log("Beep beep!");
  }

  // Overriding parent method
  start() {
    console.log(`${this.brand} car with ${this.doors} doors roars to life!`);
  }
}

// Usage
const car1 = new Car("Tesla", 4);

car1.start();  // Overridden method
car1.honk();   // Child-specific method
car1.stop();   // Inherited from Vehicle
