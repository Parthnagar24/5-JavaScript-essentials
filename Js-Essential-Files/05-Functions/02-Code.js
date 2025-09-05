// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Parth"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

// 4. Anonymous Function
setTimeout(function() {
    console.log("Anonymous function executed");
}, 500);

// 5. IIFE
(function() {
    console.log("IIFE executed immediately!");
})();

// 6. Higher-Order Function
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(10));

// 7. Default Parameters
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
greetUser();
greetUser("Alice");

// 8. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 9. Callback Function
function processInput(callback) {
    let name = "John";
    callback(name);
}
processInput((name) => console.log(`Hello from callback, ${name}`));

// 10. Recursive Function
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
