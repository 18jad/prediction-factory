const signInForm = document.querySelector(".signin-container"),
  signUpForm = document.querySelector(".signup-container"),
  signInLink = document.getElementById("signInLink"),
  signUpLink = document.getElementById("signUpLink"),
  signUpLink = document.getElementById("signUpLink");

function switchAuth(type) {
  if (type == "signin") {
    signUpForm.classList.add("hide-auth");
    signInForm.classList.remove("hide-auth");
  } else if (type == "signup") {
    signInForm.classList.add("hide-auth");
    signUpForm.classList.remove("hide-auth");
  }
}

signInLink.onclick = () => switchAuth("signin");
signUpLink.onclick = () => switchAuth("signup");
