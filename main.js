function clear_field() {
  const inputs = document.querySelectorAll("input");
  const text = document.querySelector("textarea");
  inputs.forEach((input) => (input.value = ""));
  text.value = "";
}

const b = document.querySelector("button");
b.addEventListener("click", clear_field);

// let btn = document.querySelector("button");
// let i = document.querySelectorAll("input");
// btn.addEventListener("click", () => {
//   i.forEach((input) => (input.value = ""));
// });
