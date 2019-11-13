// Selecting views
let step3 = document.getElementById("StepThreeContainer");
let step1 = document.getElementById("StepOneContainer");
let step2 = document.getElementById("StepTwoContainer");
let step4 = document.getElementById("SuccessContainer");

// Adding listeners
document.getElementById("StepOneNext").addEventListener("click", function(e) {
  e.preventDefault();
  let name = document.getElementById("first_name").value;
  let nameError = document.getElementById("first_name_error");
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("email_error");
  if (regex(/[a-z]{3,}/i, name)) {
    nameError.classList.remove("display");
    nameError.classList.add("hide");
    if (regex(/^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,3}$/, email)) {
      navigate(step1, step2);
      emailError.classList.remove("display");
      emailError.classList.add("hide");
    } else {
      emailError.classList.add("display");
      emailError.classList.remove("hide");
    }
  } else {
    nameError.classList.add("display");
    nameError.classList.remove("hide");
  }
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
  let contact = document.getElementById("contact").value;
  let errorContact = document.getElementById("contact_error");
  let errorCountry = document.getElementById("country_error");
  let country = document.getElementById("country").value;
  if (regex(/[0-9]{3,}/, contact)) {
    errorContact.classList.add("hide");
    errorContact.classList.remove("display");
    if (regex(/[a-z]+/i, country)) {
      navigate(step2, step3);
      errorCountry.classList.add("hide");
      errorCountry.classList.remove("display");
    } else {
      errorCountry.classList.add("display");
      errorCountry.classList.remove("hide");
    }
  } else {
    errorContact.classList.add("display");
    errorContact.classList.remove("hide");
  }
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
    let program = document.getElementById("select_program").value;
    let errorProgram = document.getElementById("select_program_error");
    let errorMessage = document.getElementById("message_error");
    let message = document.getElementById("message").value;
    if (regex(/[a-z0-9]+/i, program)) {
      errorProgram.classList.add("hide");
      errorProgram.classList.remove("display");
      if (regex(/[a-z0-9]{3,}/i, message)) {
        navigate(step3, step4);
        errorMessage.classList.add("hide");
        errorMessage.classList.remove("display");
      } else {
        errorMessage.classList.add("display");
        errorMessage.classList.remove("hide");
      }
    } else {
      errorProgram.classList.add("display");
      errorProgram.classList.remove("hide");
    }
  });

// Creating generic functions
function navigate(previous, next) {
  previous.classList.remove("display");
  previous.classList.add("hide");
  next.classList.remove("hide");
  next.classList.add("display");
}
function regex(reg, text) {
  return reg.test(text);
}
