const form = document.querySelector("form"),
  nameInput = document.getElementById("nameInput"),
  resultsContainer = document.querySelector(".prediction-results"),
  predictedAge = document.getElementById("predictedAge"),
  predictedGender = document.getElementById("predictedGender"),
  firstNationality = document.getElementById("firstNationality"),
  secondNationality = document.getElementById("secondNationality"),
  chart = document.querySelector(".pie-chart"),
  dogPicture = document.getElementById("dogPicture"),
  inputedName = document.getElementById("inputedName");

// new random dog picture every time page load
fetchDog();

// for name input submit
form.addEventListener("submit", (e) => {
  // prevent page from loading on submit
  e.preventDefault();
  // get input value aka name
  let name = nameInput.value;
  // fetch all request at once
  fetchAll(name);
  // replace the name inside title
  inputedName.textContent = name.capitalize();
  // show result div when a name is entered
  resultsContainer.classList.remove("hide");
});

// get random dog picture every time this function called
function fetchDog() {
  let url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    // get just the body of response as json
    .then((res) => res.json())
    .then((data) => {
      dogPicture.style.background = `url(${data.message}) no-repeat center`;
    });
}

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

// to get gender depending on inputed name
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

// to get nationality depending on inputed name
function fetchNationality(name) {
  let url = `https://api.nationalize.io/?name=${name}`;
  fetch(url)
    // get just the body of response as json
    .then((res) => res.json())
    .then((data) => {
      // Change gender to predicted one
      // if value is null that mean the name entered is not valid in that case replace with weird name
      const firstCountry =
        data.country.length > 0 ? data.country[0] : "Weird Name";
      const secondCountry =
        data.country.length > 0 ? data.country[1] : "Weird Name";
      if (firstCountry != "Weird Name" && secondCountry != "Weird Name") {
        const firstCountryName = countries[firstCountry.country_id];
        const firstCountryProbability = firstCountry.probability;
        const secondCountryName = countries[secondCountry.country_id];
        const secondCountryProbability = secondCountry.probability;
        firstNationality.textContent = firstCountryName;
        secondNationality.textContent = secondCountryName;
        let calculatedProbability = calculateProbability(
          firstCountryProbability,
          secondCountryProbability,
        );
        console.log(calculatedProbability.prob1, calculatedProbability.prob2);
        chart.style.background = `conic-gradient(rgba(255, 172, 172, 0.6) ${calculatedProbability.prob1}%, #3333  ${calculatedProbability.prob2}%)`;
      } else {
        firstNationality.textContent = "";
        secondNationality.textContent = "";
      }
    });
}

// use all fetch functions at once
function fetchAll(name) {
  fetchAge(name);
  fetchGender(name);
  fetchNationality(name);
}

// not very well implemented but can do the job
function calculateProbability(first, second) {
  let calc1 = ((1 - first) * 100) / 2,
    calc2 = ((1 - second) * 100) / 3;
  return { prob1: calc1, prob2: calc2 };
}

// this is just to capitalize the first letter of a string
Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
});
