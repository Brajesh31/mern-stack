submit = document.getElementById("submit");
const xhr = new XMLHttpRequest();
const d = new Date();
xhr.onload = function () {
  let data = this.response;
  data = JSON.parse(data);
  console.log(data);
  document.getElementById("details").style.display = "block";
  document.getElementById("city").textContent = data.name;
  time = d.getHours() + ":" + d.getMinutes();
  document.getElementById("time").innerHTML = time;
  document.getElementById("temperature").innerHTML = data.main.temp + "°C";
  document.getElementById("weather").innerHTML = data.weather[0].main;
  document.getElementById("humidity").innerHTML =
    '<i class="fas fa-tint fa-fw" style="color: #868B94;"></i>' +
    data.main.humidity;
  document.getElementById("speed").innerHTML =
    '<i class="fas fa-wind fa-fw" style="color: #868B94;"></i>' +
    data.wind.speed +
    "Km/h";
  if (data.weather[0].main == "Clouds") {
    document.getElementById("showimg").innerHTML =
      '<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px"></img>';
  } else if (data.weather[0].main == "Clear") {
    document.getElementById("showimg").innerHTML =
      '<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px"></img>';
  }
};
xhr.onerror = function () {};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  c_name = document.getElementById("takeinput").value;
  console.log(c_name);
  URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    c_name +
    "&appid=90a65e830dbb9415d97f1e0a3d9f171a&units=metric";
  xhr.open("GET", URL);
  xhr.send();
});
