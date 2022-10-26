const day = document.querySelector(".day");
const mnth = document.querySelector(".mnth");
const temp_number = document.querySelector("#temp_number");
const city = document.getElementById("city");
const osadki = document.querySelector(".osadki");
const date = new Date();

const days = ["Вск", "Пон", "Втр", "Ср", "Чт", "Пт", "Сб"];
let j = date.getDay();
day.textContent = days[j];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// mnth.textContent = month[1];
let i = date.getMonth();
mnth.textContent = `${month[i]} ${date.getDate()}`;

const xhr = new XMLHttpRequest();

city.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    xhr.open(
      "GET",
      `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=d982b206b7125a363d94918d08ebf560`
    );
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        temp_number.textContent = Math.floor(data.main.temp - 273);
        osadki.textContent = city.value;
      }
    };
  }
});
// const token = "fdde76573dc6d2fbc7138ecf72fcab60";
// const link = `http://api.weatherstack.com/current?access_key=${token}`;

// xhr.open("GET", link);

// xhr.send();

// xhr.onreadystatechange = () => {
//   const data2 = JSON.parse(xhr.response);
//   if (xhr.status == 200 && xhr.readyState == 4) {
//     console.log(data2);
//   }
// };
