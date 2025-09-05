/*In JavaScript, == and === are comparison operators used to check equality, but they behave differently:

== (Loose Equality / Abstract Equality)

Compares values after performing type coercion if the types are different.

JS tries to convert operands to the same type before comparison.

Can lead to unexpected results due to implicit coercion.

=== (Strict Equality)

Compares both value and type.

No type coercion is performed.

More predictable and safer for most cases.*/

// Loose equality (==) - allows type coercion
console.log(5 == "5");       // true (string "5" converted to number 5)
console.log(0 == false);     // true (false converted to 0)
console.log(null == undefined); // true
console.log(" " == 0);       // true (whitespace string -> 0)

// Strict equality (===) - checks value + type
console.log(5 === "5");      // false (number !== string)
console.log(0 === false);    // false (number !== boolean)
console.log(null === undefined); // false
console.log(" " === 0);      // false

// Best practice: always use === unless type coercion is intended
const a = "42";
const b = 42;
if (a === String(b)) {
    console.log("Strict equality works safely!"); // Output
}
