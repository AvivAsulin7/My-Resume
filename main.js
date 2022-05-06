function clear_field() {
  const inputs = document.querySelectorAll("input");
  const text = document.querySelector("textarea");
  inputs.forEach((input) => (input.value = ""));
  text.value = "";
}

const b = document.querySelector("#clear");
b.addEventListener("click", clear_field);

// **************************************************
