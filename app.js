const btns = document.querySelectorAll(".button-digits");
const submitForm = document.querySelector(".submit-form");
const number = document.querySelector(".number");
const cardOne = document.querySelector(".card1");
const cardTwo = document.querySelector(".card2");
const submit = document.getElementById("submit");



btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnNumber = e.target.textContent;

    if (btnNumber) {
      number.textContent = `${btnNumber}`;
    }

    if (!btn.classList.contains("active")) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
});

submit.addEventListener('click', () => {
  cardOne.style.display = 'none';
  cardTwo.style.display = 'block';
})


submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

