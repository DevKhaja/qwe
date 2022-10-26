export default function get_data() {
  const first_name = document.getElementById("name");
  const register = document.getElementById("reg");
  register.addEventListener("click", (e) => {
    e.preventDefault();
    const obj = {
      name: first_name.value,
    };
    console.log(obj);
  });
}
console.log(1);
