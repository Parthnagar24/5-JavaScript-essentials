/* 
DOM (Document Object Model)
---------------------------
- The DOM is a programming interface for web documents.
- Represents the page structure as a tree of objects.
- Each node corresponds to an HTML element, attribute, or text.

Why DOM Manipulation?
- JavaScript can dynamically:
   ✅ Access HTML elements
   ✅ Modify content
   ✅ Change styles
   ✅ Add/remove elements
   ✅ Handle user events (clicks, input, hover)
*/


/* --------------------------
   Selecting Elements
-------------------------- */
// document.getElementById("id") → Selects by ID (fastest).
// document.getElementsByClassName("class") → Returns HTMLCollection.
// document.getElementsByTagName("tag") → Returns HTMLCollection.
// document.querySelector("cssSelector") → Returns first match.
// document.querySelectorAll("cssSelector") → Returns NodeList.

const heading = document.getElementById("title");
const items = document.querySelectorAll(".item");


/* --------------------------
   Manipulating Content
-------------------------- */
// element.innerHTML = "Hello World" → Renders HTML.
// element.textContent = "Plain Text" → Safer, no HTML parsing.
// element.setAttribute("attr","value") → Set attributes.
// element.getAttribute("attr") → Get attributes.

heading.textContent = "DOM Manipulation in JS";
heading.style.color = "blue";


/* --------------------------
   Styling Elements
-------------------------- */
// element.style.color = "red";
// element.classList.add("active");
// element.classList.remove("hidden");
// element.classList.toggle("dark-mode");

heading.classList.add("highlight");


/* --------------------------
   Creating & Removing Elements
-------------------------- */
// document.createElement("div")
// parent.appendChild(newElement)
// parent.insertBefore(newElement, referenceElement)
// element.remove()

const newItem = document.createElement("li");
newItem.textContent = "New List Item";
document.querySelector("ul").appendChild(newItem);

const firstItem = document.querySelector("ul li");
firstItem.remove();


/* --------------------------
   Event Handling
-------------------------- */
// element.onclick = function() {...}
// element.addEventListener("click", () => {...});

const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  alert("Button was clicked!");
  heading.classList.toggle("highlight");
});
