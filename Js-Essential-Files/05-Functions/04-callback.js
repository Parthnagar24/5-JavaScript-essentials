/*
📘 Theory: Callback Function
- A function passed into another function to run later.
- Common in async tasks (setTimeout, fetch, etc.).

📂 Category → Asynchronous JavaScript
*/

function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((msg) => console.log(msg)); // ✅ Data loaded
