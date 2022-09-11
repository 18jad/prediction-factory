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

signInLink.onclick = () => switchAuth("signin");
signUpLink.onclick = () => switchAuth("signup");

function signUp() {
  let username = signUpUsername.value,
    password = signUpPassword.value,
    confirmedPassword = signUpPasswordConfirmation.value;
  if (username.trim < 3) {
    throw new Error("Username is too short");
  }
  if (password != confirmedPassword) {
    throw new Error("Passwords are not identical");
  }
  if (localStorage.getItem("users")) {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; ++i) {
      if (users[i].username == username) {
        throw new Error("Username already exists");
      }
    }
    let arr = JSON.parse(localStorage.getItem("users"));
    arr.push({ username, password });
    localStorage.setItem("users", JSON.stringify(arr));
  } else {
    localStorage.setItem("users", JSON.stringify([{ username, password }]));
  }
}

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signUp();
});
