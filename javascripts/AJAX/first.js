let person = {
  name: "Akansha",
  age: 20,
  address: "mathura",
};

console.log(person.name);

person = JSON.stringify(person);

console.log(person);

person = JSON.parse(person);

console.log(person);
const xhr = new XMLHttpRequest();

xhr.onload = function () {
  let data = this.response;
  data = JSON.parse(data);
  console.log(typeof data);
  for (i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
};

xhr.onerror = function () {};

URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=3&page=1&sparkline=false";
xhr.open("GET", URL);

xhr.send();
