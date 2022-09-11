const signInForm = document.querySelector(".signin-container"),
  signUpForm = document.querySelector(".signup-container"),
  signInLink = document.getElementById("signInLink"),
<<<<<<< HEAD
  signUpLink = document.getElementById("signUpLink");
=======
  signUpLink = document.getElementById("signUpLink"),
  signUpUsername = document.getElementById("signUpUsername"),
  signUpPassword = document.getElementById("signUpPassword"),
  signUpPasswordConfirmation = document.getElementById(
    "signUpPasswordConfirmation",
  ),
  signInUsername = document.getElementById("signInUsername"),
  signInPassword = document.getElementById("signInPassword");
>>>>>>> 4099d624d41a6c4dce07c5691e07e26097054e8a

function switchAuth(type) {
  if (type == "signin") {
    signUpForm.classList.add("hide-auth");
    signInForm.classList.remove("hide-auth");
  } else if (type == "signup") {
    signInForm.classList.add("hide-auth");
    signUpForm.classList.remove("hide-auth");
  }
}
<<<<<<< HEAD
=======

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
    let arr = localStorage.getItem("users");
    arr.push({ username, password });
    localStorage.setItem("users", arr);
  } else {
    localStorage.setItem("users", JSON.stringify([{ username, password }]));
  }
}

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  signUp();
});

signInForm.addEventListener("submit", (e) => {});
>>>>>>> 4099d624d41a6c4dce07c5691e07e26097054e8a
