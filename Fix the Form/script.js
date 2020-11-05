/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input");
const form = document.getElementById("myForm");
const formFeedback = document.getElementsByClassName("form-feedback")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!e.target[0].value) { // This is hacky. Always make sure you are checkio
    formFeedback.textContent = "Please type your email";
    form.getElementsByTagName("input")[0].focus();
  } else {
    formFeedback.classList.add('animated-feedback')
    formFeedback.textContent = '📢 You got 📧 mail!'
  }
});
