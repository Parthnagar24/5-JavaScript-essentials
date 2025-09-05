/*1. if statement

Executes code only if the condition is true.*/

if (condition) {
    // code to execute if condition is true
}

/*2. if-else statement

Executes one block if condition is true, another if false.*/

if (condition) {
    // true block
} else {
    // false block
}

/*3. if-else if-else ladder

Handles multiple conditions in sequence.*/

if (condition1) {
    // block1
} else if (condition2) {
    // block2
} else {
    // default block
}

/*4. switch statement

Checks one expression against multiple cases.

Cleaner alternative to long if-else ladders.*/

switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code if none match
}

/*5. Ternary operator (conditional expression)

Short-hand for simple if-else.*/

condition ? valueIfTrue : valueIfFalse;