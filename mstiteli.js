const login = document.querySelector(".login");
const scheme_svg = document.querySelector(".scheme-svg");
const spinner = document.querySelectorAll(".days");

function main() {
  if (localStorage.getItem("name")) {
    login.textContent = `Привет ${localStorage.getItem("name")}`;
  } else {
    login.textContent = "login";
  }
  login.addEventListener("click", () => {
    const name = prompt("введите своё имя");
    localStorage.setItem("name", name);
    login.textContent = localStorage.getItem("name");
  });

  scheme_svg.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("booked")) {
      console.log(1);
    }
  });

  //   zabranirovat mesto
  scheme_svg.addEventListener("click", (e) => {
    if (!e.target.classList.contains("booked")) {
      e.target.classList.toggle("active");
      let counts = scheme_svg.querySelectorAll(".active").length;
      console.log(counts);
    }
  });
  for (let i = 0; i < spinner.length; i++) {
    spinner[i].addEventListener("click", (e) => {
      console.log(e.target);
    });
  }
}

main();
