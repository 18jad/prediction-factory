const form = document.querySelector("form"),
  nameInput = document.getElementById("nameInput"),
  resultsContainer = document.querySelector(".prediction-results"),
  predictedAge = document.getElementById("predictedAge"),
  predictedGender = document.getElementById("predictedGender"),
  firstNationality = document.getElementById("firstNationality"),
  secondNationality = document.getElementById("secondNationality");

// for name input submit
form.addEventListener("submit", (e) => {
  // prevent page from loading on submit
  e.preventDefault();
  let name = nameInput.value;
  resultsContainer.classList.remove("hide");
});

// fetch the age using name
function fetchAge(name) {
  let url = `https://api.agify.io/?name=${name}`;
  fetch(url)
    // get just the body of response as json
    .then((res) => res.json())
    .then((data) => {
      // Change age to predicted one
      // if value is null that mean the name entered is not valid in that case replace with weird name
      predictedAge.textContent = data.age != null ? data.age : "Weird Name";
    });
}

function fetchGender(name) {
  let url = `https://api.genderize.io?name=${name}`;
  fetch(url)
    // get just the body of response as json
    .then((res) => res.json())
    .then((data) => {
      // Change gender to predicted one
      // if value is null that mean the name entered is not valid in that case replace with weird name
      predictedGender.textContent =
        data.gender != null ? data.gender.capitalize() : "Weird Name";
    });
}

// this just to capitalize the first letter of a string
Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
});
