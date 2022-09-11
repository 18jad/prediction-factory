const signInForm = document.querySelector(".signin-container"),
  signUpForm = document.querySelector(".signup-container"),
  signInLink = document.getElementById("signInLink"),
  signUpLink = document.getElementById("signUpLink"),
  signUpUsername = document.getElementById("signUpUsername"),
  signUpPassword = document.getElementById("signUpPassword"),
  signUpPasswordConfirmation = document.getElementById(
    "signUpPasswordConfirmation",
  ),
  signInUsername = document.getElementById("signInUsername"),
  signInPassword = document.getElementById("signInPassword");

function switchAuth(type) {
  if (type == "signin") {
    signUpForm.classList.add("hide-auth");
    signInForm.classList.remove("hide-auth");
  } else if (type == "signup") {
    signInForm.classList.add("hide-auth");
    signUpForm.classList.remove("hide-auth");
  }
}
