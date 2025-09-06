/*
📘 Theory: Error Handling in JavaScript

▪ JavaScript uses exceptions to handle errors.
▪ Instead of crashing, errors can be caught and handled gracefully.

1️⃣ try...catch
   - Code inside `try` runs normally.
   - If error occurs → control moves to `catch`.
   - Program continues without crashing.

2️⃣ finally
   - Always executes (error or no error).
   - Used for cleanup (closing files, releasing resources, etc.).

3️⃣ throw
   - Manually create and throw errors.
   - Can throw built-in errors (Error, TypeError, RangeError) or custom errors.

4️⃣ Custom Errors
   - Extend `Error` class to create meaningful, domain-specific errors.

▪ Category → Control Flow & Error Handling
*/

// ------------------- Example 1: try...catch -------------------
try {
  let result = 10 / 0;
  console.log("Result:", result); // Infinity

  // Error: y is not defined
  let x = y + 5;
} catch (error) {
  console.log("An error occurred:", error.message);
}

// ✅ Output:
// Result: Infinity
// An error occurred: y is not defined

// ------------------- Example 2: finally -------------------
try {
  console.log("Trying risky operation...");
  let num = JSON.parse("123abc"); // ❌ Invalid JSON
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Cleanup done ✅");
}

// ✅ Output:
// Trying risky operation...
// Error caught: Unexpected token a in JSON
// Cleanup done ✅

// ------------------- Example 3: throw -------------------
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed 🚫");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Caught:", error.message);
}

// ✅ Output:
// Caught: Division by zero is not allowed 🚫

// ------------------- Example 4: Custom Errors -------------------
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError"; // Custom error name
  }
}

function validateAge(age) {
  if (age < 18) {
    throw new ValidationError("Age must be 18 or above");
  }
  return true;
}

try {
  validateAge(15);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// ✅ Output:
// ValidationError: Age must be 18 or above

// 🔑 Recap:
// - Use try...catch for safe error handling
// - Use finally for cleanup tasks
// - Use throw for custom error logic
// - Create custom errors for domain-specific validation
