function clear_field() {
  const inputs = document.querySelectorAll("input");
  const text = document.querySelector("textarea");
  inputs.forEach((input) => (input.value = ""));
  text.value = "";
}

const b = document.querySelector("#clear");
b.addEventListener("click", clear_field);

// **************************************************

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "avivasulin1211@gmail.com",
    Password: "jxhavylbcfeprndu",
    To: "avivasulin1211@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact from PROJECT:My Resume",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent to me , Thank you!"));
}
