// 'use strict'
const btns = document.querySelectorAll(".button-digits");
const number = document.querySelector(".number");
const cardOne = document.querySelector(".card1");
const cardTwo = document.querySelector(".card2");
const submit = document.getElementById("submit");
const error = document.querySelector(".error-msg");
let button = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    button = btn.textContent;
    if (button) {
      number.textContent = button;
    }
    // switching active class
    btns.forEach((btn) => {
      if (button !== btn.innerHTML) {
        btn.classList.remove("active");
      } else {
        btn.classList.add("active");
      }
    });
  });
});

submit.addEventListener("click", onSubmit);

function onSubmit() {
  if (button === 0) {
    // alert("Please select a rating before submiting");
    error.innerHTML = `Please select a rating before submiting`
  } else {
    number.innerHTML = button;
    cardTwo.style.display = "block";
    cardOne.style.display = "none";
  }
}
