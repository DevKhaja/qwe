const inp_header = document.getElementById("inp_header");
const btn = document.getElementById("btn");
const movies = document.getElementById("movies");
const buttons = document.getElementById("buttons");

const xhr = new XMLHttpRequest();

// отправка данных
btn.addEventListener("click", () => {
  xhr.open(
    "GET",
    "http://www.omdbapi.com/?apikey=c9643353&s=" + inp_header.value
  );
  xhr.send();
});

// слушатель ответа API

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let data = JSON.parse(xhr.response);
    movies.innerHTML = "";
    buttons.innerHTML = "";

    for (let i = 0; i < data.Search.length; i++) {
      let movie = data.Search[i];
      let poster = document.createElement("img");
      let name = document.createElement("h1");
      let year = document.createElement("p");
      let block_movie = document.createElement("div");
      block_movie.classList.add("blok");

      poster.src = movie.Poster == "N/d" ? "./images/poster.png" : movie.Poster;
      name.textContent = movie.Title;
      year.textContent = movie.Year;
      block_movie.append(poster, name, year);
      movies.append(block_movie);

      let times = Math.ceil(data.totalResults / 12);

      for (let j = 0; j < times; j++) {
        let button = document.createElement("button");
        button.textContent = 1 + j;
        button.addEventListener("click", () => {
          xhr.open(
            "GET",
            "http://www.omdbapi.com/?apikey=c9643353&s=" +
              inp_header.value +
              "&page=" +
              (j + 1)
          );
          xhr.send();
        });
        buttons.append(button);
      }
    }
  }
};
