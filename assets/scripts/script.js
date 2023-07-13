"use strict";

// storing the elements in a variable
const heroImageEL = document.querySelector(".hero-image");
const textsEL = document.querySelector(".texts");
const successStateEL = document.querySelector(".success-state");

const validEmailEL = document.querySelector(".valid-email");
const emailFieldEL = document.querySelector(".email-field");
const subscribeBtnEL = document.querySelector(".submit");
const dismissBtnEL = document.querySelector(".dismiss");
const targetEmail = document.querySelector(".target-input-email");

const correctEmail = function () {
  heroImageEL.classList.add("hidden");
  textsEL.classList.add("hidden");
  successStateEL.classList.remove("hidden");
};

const incorrectEmail = function () {
  validEmailEL.classList.remove("hidden");
  emailFieldEL.classList.add("form-color");
  emailFieldEL.classList.add("text-color");
};

// event handler for the subscribe button
subscribeBtnEL.addEventListener("click", function () {
  const email = emailFieldEL.value; // storing the value of the email field in a variable
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/; // Regular expression for email
  if (!email) {
    // If no value is inputed
    validEmailEL.classList.remove("hidden");
    emailFieldEL.classList.add("form-color");
  } else {
    // If a value is inputed
    if (emailRegex.test(email)) {
      // if the value inputed is an email
      correctEmail();
      targetEmail.textContent = email;
    } else {
      incorrectEmail();
    }
  }
});

// event handler for the dismiss button
dismissBtnEL.addEventListener("click", function () {
  heroImageEL.classList.remove("hidden");
  textsEL.classList.remove("hidden");
  successStateEL.classList.add("hidden");
   validEmailEL.classList.add("hidden");
  emailFieldEL.classList.remove("form-color");
  emailFieldEL.classList.remove("text-color");
  emailFieldEL.value = "";
});
