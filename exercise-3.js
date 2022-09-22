const usernameField = document.querySelector("#username-field");
const usernameRules = document.querySelector(".username-rules");
const usernameSuccess = document.querySelector(".username-success");

usernameField.addEventListener("input", () => usernameChangeHandler(usernameField.value));

// Create a regular expression here that does the following
  // 1. Can only contain letters and the 26 letters of the alphabet
  // 2. Must begin with a letter, not a number
  // 3. Must be atleast 8 characters long, and not more than 30 characters
  // Inside the {} never leave white space
  // $ allows adding of special characters like !@#$%^&*()
  // ^ only allow text characters at the begining for this case
const usernamePattern = /^[a-z][a-z0-9]{7,29}$/i

function usernameChangeHandler(userInput) {
  // Use your regular expression here to test if userInput is valid or not
  // If it is valid call the showGood function, if not, call the showBad function
  if(usernamePattern.test(userInput)) {
    showGood()
  } else {
    showBad()
  }
}

function showGood() {
  usernameSuccess.classList.remove("hidden");
  usernameRules.classList.add("hidden");
}

function showBad() {
  usernameSuccess.classList.add("hidden");
  usernameRules.classList.remove("hidden");
}
