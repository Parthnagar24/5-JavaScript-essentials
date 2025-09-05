/*
📘 Theory: setTimeout
- Schedules code execution after a delay.
- Async → uses Event Loop (doesn’t block main thread).

📂 Category → Asynchronous JavaScript (Timers)
*/

console.log("Start");

setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

console.log("End");

/*
✅ Output:
Start
End
Executed after 1 second
*/
