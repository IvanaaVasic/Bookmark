const submitButton = document.querySelector(".signup-button");

function submitForm() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const inputField = document.querySelector(".signup-input");
  const message = document.querySelector(".error-message");
  const inputWrapper = document.querySelector(".input-error-message-wrappeer");
  if (inputField.value == "") {
    inputWrapper.classList.add("border-signup-form");
    inputField.classList.remove("border-input");
    inputField.classList.add("signup-input-error-border");
    inputField.classList.add("error");
    message.style.display = "flex";
    message.innerText = "Oops! Please enter your email!";
  } else if (!emailRegex.test(inputField.value)) {
    inputWrapper.classList.add("border-signup-form");
    inputField.classList.remove("border-input");
    inputField.classList.add("signup-input-error-border");
    inputField.classList.add("error");
    inputField.value = "";
    inputField.placeholder = "example@email.com";
    message.style.display = "flex";
    message.innerText = "Whoops, make sure it’s an email";
  } else if (emailRegex.test(inputField.value)) {
    inputWrapper.classList.remove("border-signup-form");
    inputField.classList.remove("signup-input-error-border");
    inputField.classList.remove("error");
    inputField.classList.add("border-input");
    message.style.display = "none";
  }
}

submitButton.addEventListener("click", submitForm);
