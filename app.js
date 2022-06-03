const btns = document.querySelectorAll(".button-digits");
const submitForm = document.querySelector(".submit-form");
const number = document.querySelector(".number");
const cardOne = document.querySelector(".card1");
const cardTwo = document.querySelector(".card2");
const submit = document.getElementById("submit");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnNumber = e.target.textContent;
    // updating rating on button click
    if (btnNumber) {
      number.textContent = `${btnNumber}`;
    }
    // switching active class
    btns.forEach((btn) => {
      if (btn.textContent !== btnNumber) {
        btn.classList.remove("active");
      } else {
        btn.classList.add("active");
      }
    });
    console.log(btn.textContent);
  });
});

submit.addEventListener("click", () => {
  cardOne.style.display = "none";
  cardTwo.style.display = "block";
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
