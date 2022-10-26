// import get_data from "./regs.js";

// get_data();

function* gen(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      yield i;
    }
  }
}
const g = gen(10);
