/*
📘 Theory: Default Case in switch
- A `switch` statement checks multiple cases.
- If no case matches, the `default` block runs.
- Acts like "else" in if-else chains.

▪ Category → Conditional Statements
*/

let fruit = "Mango";

switch (fruit) {
  case "Apple":
    console.log("It's an Apple 🍎");
    break;
  case "Banana":
    console.log("It's a Banana 🍌");
    break;
  default:
    console.log("Unknown fruit 🥭");
}

// ✅ Output: Unknown fruit 🥭
