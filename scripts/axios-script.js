const ip = document.getElementById("ip");

const ipOptions = {
  method: "GET",
  url: "https://api.ipify.org/",
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
