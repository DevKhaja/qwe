const xhr = new XMLHttpRequest();
const city = "Tashkent";
const token = "73f0fa95cf58324fd2dc7832a86dd63d";
const link = `http://api.weatherstack.com/current?access_key=${token}&query=${city}`;

xhr.open("POST", link);

const obj = { city: "Tashkent" };
xhr.send(JSON.stringify(obj));

xhr.onreadystatechange = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
};

// temperature -> data.current.temperature
// city -> data.location.name

// pressure - > data.current.pressure
// wind -> data.current.wind_speed
// Chance of rain -> data.current.cloudcover
// Humidity -> data.current.humidity
