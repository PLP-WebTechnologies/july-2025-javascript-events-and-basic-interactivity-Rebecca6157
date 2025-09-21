// Part 2: JavaScript Functions - Scope, Parameters & Return
let globalCount = 0; // Global scope example

function incrementCount(value) {
  let localCount = value; // Local scope
  globalCount += localCount;
  return globalCount; // return value
}

// Part 3: Trigger JS animations dynamically

// Animate box on button click
const triggerBtn = document.getElementById("trigger-btn");
const jsBox = document.getElementById("js-box");

triggerBtn.addEventListener("click", () => {
  animateBox(jsBox, "#4caf50");
});

function animateBox(element, color) {
  element.style.backgroundColor = color;
  element.style.transform = "scale(1.5)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
    element.style.backgroundColor = "#ff5722";
  }, 500);
}

// Flip card
const flipCardBtn = document.getElementById("flip-card-btn");
const card = document.querySelector(".card");

flipCardBtn.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Popup modal
const popupBtn = document.getElementById("popup-btn");
const popup = document.querySelector(".popup");
const closePopupBtn = document.getElementById("close-popup");

popupBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
