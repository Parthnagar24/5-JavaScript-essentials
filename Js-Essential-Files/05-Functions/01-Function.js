/* 
1. Function Declaration (Named Function)
   - Traditional way of defining functions.
   - Hoisted → can be called before their definition.
*/
function greetDeclaration(name) {
    return `Hello, ${name}`;
}


/* 
2. Function Expression
   - Function assigned to a variable.
   - Not hoisted → must be defined before use.
*/
const greetExpression = function(name) {
    return `Hello, ${name}`;
};


/* 
3. Arrow Functions (ES6)
   - Shorter syntax.
   - Lexically binds "this" (doesn’t have its own this).
   - Useful for concise functions and callbacks.
*/
const greetArrow = (name) => `Hello, ${name}`;


/* 
4. Anonymous Functions
   - Functions without a name.
   - Commonly used as callbacks.
*/
setTimeout(function() {
    console.log("Anonymous function executed");
}, 1000);


/* 
5. Immediately Invoked Function Expressions (IIFE)
   - Function that runs immediately after being defined.
   - Useful for creating isolated scopes.
*/
(function() {
    console.log("IIFE executed");
})();


/* 
6. Higher-Order Functions
   - Functions that take other functions as arguments or return functions.
   - Foundation for functional programming.
*/
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10


/* 
7. Default Parameters
   - Provide default values if no argument is passed.
*/
function greetDefault(name = "Guest") {
    return `Hello, ${name}`;
}


/* 
8. Rest Parameters
   - Collect multiple arguments into an array.
*/
function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}


/* 
9. Callback Functions
   - A function passed into another function to be executed later.
*/
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput((name) => console.log(`Hello, ${name}`));


/* 
10. Recursion
   - Function that calls itself until a base condition is met.
*/
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
