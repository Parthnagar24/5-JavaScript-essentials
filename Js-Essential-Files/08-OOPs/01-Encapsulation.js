/* Encapsulation is one of the four pillars of Object-Oriented Programming (OOP) (others: Abstraction, Inheritance, Polymorphism).

Definition: Encapsulation is the practice of bundling data (state) and methods (behavior) inside a single unit (class or object) and restricting direct access to some of the object’s components.

In JavaScript, encapsulation can be implemented using:

Closures (functions that "remember" variables from their scope).

Private fields (#) introduced in ES2020, which make class properties truly private.

Why important?

Prevents external code from tampering with internal states.

Provides a clean interface for interaction.

Increases maintainability and security of code.    */

class BankAccount {
  #balance = 0; // Private field (not accessible outside this class)

  constructor(owner) {
    this.owner = owner;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdrawal attempt.");
    }
  }

  // Public method to check balance
  getBalance() {
    return this.#balance;
  }
}

// Usage
const account = new BankAccount("Alice");

account.deposit(500);
account.withdraw(200);

console.log("Balance:", account.getBalance()); // ✅ Works
// console.log(account.#balance); // ❌ SyntaxError: Private field '#balance' must be declared
