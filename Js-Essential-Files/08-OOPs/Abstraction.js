/*4. AAbstraction is about hiding internal complexity and exposing only the essential features through a clear interface.

Definition: Abstraction allows us to define a blueprint (like an abstract class or interface) where we specify what should be done, but hide how it’s done.

JavaScript twist: Unlike Java or C#, JavaScript doesn’t have built-in abstract classes or interfaces, but we can simulate abstraction using:

Base classes with unimplemented methods (throwing errors if not overridden).

Duck typing (ensuring objects have the expected methods).

JSDoc/TypeScript for stronger typing.

Benefits:

Hides unnecessary details → makes APIs simpler.

Forces child classes to implement required methods.

Improves maintainability and scalability.*/

// filename: abstraction.js

// Abstract class simulation
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly.");
    }
  }

  // Abstract method
  calculateArea() {
    throw new Error("Must implement calculateArea method");
  }

  // Non-abstract method (shared logic)
  describe() {
    console.log(`This is a shape of type: ${this.constructor.name}`);
  }
}

// Circle class (implements calculateArea)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Rectangle class (implements calculateArea)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Usage
const circle = new Circle(5);
circle.describe();
console.log("Circle area:", circle.calculateArea());

const rect = new Rectangle(4, 6);
rect.describe();
console.log("Rectangle area:", rect.calculateArea());

// const s = new Shape(); // ❌ Error: Cannot instantiate abstract class
