const btn_to_reg = document.getElementById("to-reg");
const bloks = document.querySelectorAll(".blok");
const container = document.querySelector(".container");
const nickname = document.getElementById("nickname");
const phone = document.getElementById("phone");
localStorage.setItem("sum", 0);
let temp = 0;
btn_to_reg.addEventListener("click", () => {
  for (let i = 0; i < bloks.length; i++) {
    if (temp <= 11) {
      if (temp == 1 && nickname.value != "" && phone.value != "") {
        console.log("YES");
        break;
      } else {
        if (temp == 1) {
          localStorage.setItem("nickname", nickname.value);
        }
        if (temp > 1) {
          check_answer(`q${temp - 1}`);
        }
        bloks[temp].classList.add("hide");
        bloks[temp + 1].classList.remove("hide");
        temp++;
        break;
      }
    }
  }
});

function check_answer(name) {
  const inputs = document.getElementsByName(name);
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
    }
  }
}
check_answer("q1");
