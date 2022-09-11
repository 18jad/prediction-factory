const ip = document.getElementById("ip");
const boredBtn = document.querySelector(".bored-btn");
const activity = document.getElementById("activity");
const activitySection = document.querySelector(".activity-section");
const activityContainer = document.querySelector(".activity-container");

const ipOptions = {
  method: "GET",
  url: "https://api.ipify.org/",
  params: { format: "json" },
};

const boredOptions = {
  method: "GET",
  url: "https://www.boredapi.com/api/activity",
  params: { format: "json" },
};

function getIp() {
  axios
    .request(ipOptions)
    .then((response) => {
      ip.textContent = `Your ip: ${response.data.ip}`;
    })
    .catch((error) => {
      ip.textContent = `Error ${error}`;
    });
}

function iAmBored() {
  axios
    .request(boredOptions)
    .then((response) => {
      activity.textContent = response.data.activity;
    })
    .catch((error) => {
      activity.textContent = error;
    });
}

boredBtn.addEventListener("click", () => {
  iAmBored();
  activitySection.classList.add("show-activity");
  activityContainer.classList.add("show-activity");
});

activitySection.addEventListener("click", () => {
  activitySection.classList.remove("show-activity");
  activityContainer.classList.remove("show-activity");
});
