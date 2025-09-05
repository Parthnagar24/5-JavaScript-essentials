/* 1. while loop
   Runs as long as the condition is true. */
let i = 1;
while (i <= 5) {
  console.log(i); // prints 1 to 5
  i++;
}


/* 2. do...while loop
   Runs the code at least once, then checks the condition. */
let j = 1;
do {
  console.log(j); // prints 1 to 5
  j++;
} while (j <= 5);


/* 3. for loop
   Most common loop with initialization, condition, increment/decrement. */
for (let k = 1; k <= 5; k++) {
  console.log(k); // prints 1 to 5
}


/* 4. for...of loop
   Used to loop through arrays, strings, or other iterables. */
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit); // prints each fruit
}


/* 5. for...in loop
   Used to loop through the keys/properties of an object. */
let person = { name: "Parth", age: 20, city: "Kolkata" };
for (let key in person) {
  console.log(key, ":", person[key]); // prints key-value pairs
}
