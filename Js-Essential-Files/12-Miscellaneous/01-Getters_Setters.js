// =============================================
// 📝 Getters & Setters in JavaScript
// =============================================
//
// 1. What are they?
// - Getter → Special method to "get" a property value like a normal property.
// - Setter → Special method to "set" or update a property with extra logic.
//
// 👉 They provide encapsulation & control over how object properties are accessed/modified.
//
// ---------------------------------------------------
// 2. Why use them?
// ---------------------------------------------------
// - To add logic when reading/writing values.
// - To make computed properties.
// - To validate input before setting values.
// - To hide private/internal details from outside code.
//
// ---------------------------------------------------
// 3. Basic Example: Object with Getter & Setter
// ---------------------------------------------------
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  
  // Getter: acts like a read-only property
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter: runs when assigning to fullName
  set fullName(name) {
    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last || "";
  }
};

console.log(person.fullName); // "Alice Johnson"

person.fullName = "Bob Smith"; // triggers setter
console.log(person.firstName); // "Bob"
console.log(person.lastName);  // "Smith"

// ---------------------------------------------------
// 4. Class Example: Getter & Setter with Validation
// ---------------------------------------------------
class Rectangle {
  constructor(width, height) {
    this._width = width;   // convention: "_" means "internal/private"
    this._height = height;
  }

  // Getter: computed property (no parentheses when used)
  get area() {
    return this._width * this._height;
  }

  // Setter: adds validation logic
  set width(value) {
    if (value <= 0) throw new Error("Width must be positive");
    this._width = value;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;        // uses setter
console.log(rect.area); // 100

// rect.width = -5;     // ❌ Error: Width must be positive
