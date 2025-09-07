/*3. Polymorphism (Greek: poly = many, morph = forms) means “many forms” — the ability of different objects to respond to the same method in different ways.

Definition: Polymorphism allows a single interface (method name) to be implemented differently by different classes.

Types in OOP:

Compile-time (overloading) → Not directly supported in JavaScript (but we can mimic it using default params/rest params).

Runtime (overriding) → Fully supported in JavaScript via inheritance and method overriding.

How JS does it:

When a method is called on an object, JS checks that object’s prototype chain and executes the most specific implementation.

Benefits:

Cleaner, more flexible code.

Promotes interface-based design.

Allows treating different objects uniformly while letting them behave differently.*/

// filename: polymorphism.js

class Animal {
   makeSound() {
     console.log('Some generic sound'); } }
      class Dog extends Animal { 
      makeSound()
       { console.log('Woof!'); } }
        class Cat extends Animal
         { makeSound()
           { console.log('Meow!'); } 
          
          } // Polymorphism in action 
          const animals = [new Dog(), new Cat()]; animals.forEach(animal => animal.makeSound()); // Different sounds