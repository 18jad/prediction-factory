const ip = document.getElementById("ip");
const boredBtn = document.querySelector(".bored-btn");

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
      console.error(error);
    });
}

function iAmBored() {
  axios
    .request(boredOptions)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

boredBtn.onclick = () => iAmBored();
