// Select views
let step3 = document.getElementById("StepThreeContainer");
let step1 = document.getElementById("StepOneContainer");
let step2 = document.getElementById("StepTwoContainer");
let step4 = document.getElementById("SuccessContainer");

document.getElementById("StepOneNext").addEventListener("click", function(e) {
  e.preventDefault();
  navigate(step1, step2);
});
document
  .getElementById("StepTwoPrevious")
  .addEventListener("click", function(e) {
    e.preventDefault();
    navigate(step2, step1);
  });
document.getElementById("StepTwoNext").addEventListener("click", function(e) {
  e.preventDefault();
  navigate(step2, step3);
});
document
  .getElementById("StepThreePrevious")
  .addEventListener("click", function(e) {
    e.preventDefault();
    navigate(step3, step2);
  });
document
  .getElementById("StepThreeSubmit")
  .addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
    navigate(step3, step4);
  });

function navigate(previous, next) {
  previous.classList.remove("display");
  previous.classList.add("hide");
  next.classList.remove("hide");
  next.classList.add("display");
}
