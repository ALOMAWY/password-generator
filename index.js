let password = document.getElementById("password");
let generate = document.getElementById("generate");
let copy = document.getElementById("copy");
let alarm = document.getElementById("alarm");

function generator() {
  return Math.floor(Math.random() * 9);
}

generate.addEventListener("click", () => {
  let newPassword = "";
  while (newPassword.length < 9) {
    newPassword += generator();
  }
  password.innerText = newPassword;
  newPassword = "";

  copy.dataset.copy = "true";
});

copy.addEventListener("click", () => {
  if (copy.dataset.copy == "true") {
    textCopy(password.innerText);
    alarm.style.animation = `alarm-down 5s 1 ease-in`;
    setTimeout(() => {
      alarm.style.animation = "none";

      console.log('asd')
    }, 5000);
  }
});

function textCopy(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied Text Successfully!");
    })
    .catch(() => {
      console.log("Could not copy text: ", err);
    });
}
