/*
📘 Theory: JavaScript Event System

▪ An event = any action (user click, key press, page load, or custom trigger).
▪ JavaScript follows an event-driven model → code reacts via event listeners (handlers).

1️⃣ Event Flow
   - Capturing phase (trickle down): window → document → parent → child
   - Target phase: event hits the actual element
   - Bubbling phase (bubble up): child → parent → document → window
   - Default → Bubbling is used in browsers.

2️⃣ Event Listeners
   - Attach handlers with addEventListener
   - Multiple listeners allowed
   - Can remove later with removeEventListener

3️⃣ Event Object
   - Provides event details (type, target, coordinates, etc.)

4️⃣ Event Delegation
   - Use bubbling → attach listener to parent instead of each child.
   - Improves performance and reduces memory usage.

5️⃣ Removing Event Listeners
   - Remove using same function reference.

6️⃣ Custom Events
   - Create your own events with CustomEvent and dispatch them.

7️⃣ Events in Node.js
   - Node uses EventEmitter class for event handling.

▪ Category → DOM & Event Handling
*/

// ------------------- Example 1: Adding Event Listener -------------------
/*
<button id="btn">Click Me</button>
*/
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button was clicked!");
});

// ------------------- Example 2: Event Object -------------------
btn.addEventListener("click", (event) => {
  console.log("Event type:", event.type);      // click
  console.log("Target:", event.target);        // <button>
  console.log("Coordinates:", event.clientX, event.clientY);
});

// ------------------- Example 3: Event Delegation -------------------
/*
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>
*/
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});

// ✅ Efficient: single listener for all <li>

// ------------------- Example 4: Removing Event Listeners -------------------
function greet() {
  console.log("Hello!");
}
btn.addEventListener("click", greet);

// Later remove
btn.removeEventListener("click", greet);

// ------------------- Example 5: Custom Events -------------------
const myEvent = new CustomEvent("orderPlaced", { detail: { item: "Laptop" } });

document.addEventListener("orderPlaced", (e) => {
  console.log("Order received for:", e.detail.item);
});

document.dispatchEvent(myEvent);
// ✅ Output: Order received for: Laptop

// ------------------- Example 6: Events in Node.js -------------------
/*
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("message", (msg) => {
  console.log("Message received:", msg);
});

// Emit
emitter.emit("message", "Hello from Node.js");
*/

// 🔑 Recap:
// - Events follow capturing → target → bubbling phases
// - Use addEventListener for handling
// - Use event delegation for efficiency
// - CustomEvent for your own events
// - Node.js uses EventEmitter for event-driven programming
