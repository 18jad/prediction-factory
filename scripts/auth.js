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
  signInPassword = document.getElementById("signInPassword"),
  signUpError = document.getElementById("signUpError"),
  signInError = document.getElementById("signInError");

// to switch between signin and signup form
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
  // grab username and passwrod from user input
  let username = signUpUsername.value,
    password = signUpPassword.value,
    confirmedPassword = signUpPasswordConfirmation.value;

  // if username is less then 3 characters reject
  if (username.trim().length < 3) {
    throw new Error("Username is too short");
  }

  // if passwords doesn't match reject
  if (password != confirmedPassword) {
    throw new Error("Passwords are not identical");
  }

  // check if localstorage already contains users table
  if (localStorage.getItem("users")) {
    // grab users table and parse it to be able to search it
    let users = JSON.parse(localStorage.getItem("users"));

    // iterate over the table and check if user is already available
    for (let i = 0; i < users.length; ++i) {
      if (users[i].username == username) {
        throw new Error("Username already exists");
      }
    }

    // push new user to users table
    users.push({ username, password });

    // update table
    localStorage.setItem("users", JSON.stringify(users));

    signUpCompleted();
  } else {
    // if users table doesn't exist create it and append user to it
    localStorage.setItem("users", JSON.stringify([{ username, password }]));

    signUpCompleted();
  }
}

// direct to sign in forum and clear inputs when signup is complete
function signUpCompleted() {
  alert("Account created successfully, please sign in");
  signUpUsername.value = "";
  signUpPassword.value = "";
  signUpPasswordConfirmation.value = "";
  switchAuth("signin");
}

function signIn() {
  // check if users table already exists and contains some users
  if (!localStorage.getItem("users")) {
    throw new Error("No users available please sign up first");
  }

  // grab username and password from user input
  let username = signInUsername.value,
    password = signInPassword.value,
    users = JSON.parse(localStorage.getItem("users")),
    found = false;
  for (let i = 0; i < users.length; ++i) {
    // if usename is found change foudn to true
    if (users[i].username == username) {
      found = true;

      // check if passwords matches
      if (users[i].password == password) {
      } else {
        throw new Error("Incorred password");
      }
    }
  }

  // if user wasn't found
  if (!found) throw new Error("Username not found");
}

signUpForm.addEventListener("submit", (e) => {
  // prevent page from loading
  e.preventDefault();

  // try to sign up and catch errors and display them
  try {
    signUp();
  } catch (err) {
    signUpError.classList.remove("error-hide");
    signUpError.textContent = err.message;

    // clear error message after 2 seconds
    setTimeout(() => {
      signUpError.textContent = "";
      signUpError.classList.add("error-hide");
    }, 2000);
  }
});

signInForm.addEventListener("submit", (e) => {
  // prevent page from loading
  e.preventDefault();

  // try to sign in and catch errors and display them
  try {
    signIn();
  } catch (err) {
    signInError.classList.remove("error-hide");
    signInError.textContent = err.message;

    // clear error message after 2 seconds
    setTimeout(() => {
      signInError.textContent = "";
      signInError.classList.add("error-hide");
    }, 2000);
  }
});
