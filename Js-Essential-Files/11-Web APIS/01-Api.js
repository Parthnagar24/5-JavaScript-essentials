// ============================================
// 🌍 Web APIs in JavaScript
// ============================================
//
// Web APIs are **browser-provided features**, not part of the core JS language.
// They allow JS to interact with the environment (browser, DOM, network, timers, etc.).
//
// Example: setTimeout, DOM manipulation, fetch, localStorage, etc.
//
// 👉 Important: In Node.js, Web APIs are replaced by libuv + Node-specific APIs.

// ----------------------------
// 1. Web Storage API
// ----------------------------
//
// a) Local Storage
// - Data persists even after closing the browser.
// - Storage is domain-specific (only accessible to same origin).
// - Capacity: ~5–10 MB per origin (depends on browser).
//
// b) Session Storage
// - Data persists only until the browser tab is closed.
// - Separate per tab/session.
// - API is same as localStorage.
// - Capacity: ~5–10 MB.
//
// ----------------------------
// Code Example: Local Storage
// ----------------------------
// Run this in browser console, not Node.js.
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"
localStorage.removeItem("theme");

// ----------------------------
// Code Example: Session Storage
// ----------------------------
sessionStorage.setItem("sessionId", "12345");
console.log(sessionStorage.getItem("sessionId")); // "12345"
sessionStorage.clear(); // clears everything

// ----------------------------
// 2. Common Web APIs
// ----------------------------
//
// - DOM API → document.querySelector, element.addEventListener
// - Timers API → setTimeout, setInterval, clearTimeout
// - Fetch API / XMLHttpRequest → HTTP requests
// - Events API → click, input, scroll, keydown
// - Storage API → localStorage, sessionStorage, IndexedDB
// - Geolocation API → navigator.geolocation
// - Canvas / WebGL APIs → graphics, 3D rendering
// - WebSockets API → real-time communication
// - Worker API → background scripts

// ----------------------------
// 3. How Web APIs Work with Event Loop
// ----------------------------
//
// 1. JS calls a Web API function (like setTimeout).
// 2. The browser handles the operation outside JS (in background).
// 3. Once complete, the callback is queued (macrotask/microtask).
// 4. Event Loop checks if the Call Stack is empty → then executes queued tasks.

// ----------------------------
// Example 1: Timer API
// ----------------------------
console.log("Start");

setTimeout(() => {
  console.log("This comes from Web API: setTimeout");
}, 1000);

console.log("End");

// Expected Output:
// Start
// End
// This comes from Web API: setTimeout   (after 1s)

// ----------------------------
// Example 2: DOM + Event API
// ----------------------------
// Run inside browser with an HTML button element:
//
// <button id="btn">Click Me</button>
//
// <script>
//   const button = document.getElementById("btn");
//   button.addEventListener("click", () => {
//     alert("Button clicked! Event handled by Web API.");
//   });
// </script>
//
// Here, the event handling (click) is managed by Web API → not JS itself.

// ----------------------------
// Example 3: Fetch API
// ----------------------------
// Fetch request handled by Web API.
// Once response arrives → callback goes into microtask queue.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("Fetched Data:", data))
  .catch((err) => console.error(err));
