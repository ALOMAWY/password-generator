let password = document.getElementById("password");
let generate = document.getElementById("generate");
let copy = document.getElementById("copy");
let alarm = document.getElementById("alarm");
let containChars = document.getElementById("contain-chars");
let containNumber = document.getElementById("contain-number");
let containSymbol = document.getElementById("contain-symbol");
let passwordTypes = [containChars, containNumber, containSymbol];

passwordTypes.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("checked");
    if (e.dataset.use == "true") {
      e.dataset.use = "false";
    } else {
      e.dataset.use = "true";
    }
  });
});

function generator(gevenArray) {
  let numberOfCharecters = gevenArray.length;
  return gevenArray[Math.floor(Math.random() * gevenArray.length)];
}

let charsArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let symbolsArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "\\",
  "|",
  "~",
  "`",
];

let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

generate.addEventListener("click", () => {
  let passwordContains = [];

  // Character State Chack

  if (
    containChars.dataset.use == "true" &&
    containNumber.dataset.use == "true"
  ) {
    passwordContains = numbersArray.concat(charsArray);
  } else if (
    containChars.dataset.use == "true" &&
    containSymbol.dataset.use == "true"
  ) {
    passwordContains = symbolsArray.concat(charsArray);
  } else if (containChars.dataset.use == "true") {
    passwordContains = charsArray;
  }

  // Number State Check

  if (
    containNumber.dataset.use == "true" &&
    containChars.dataset.use == "true"
  ) {
    passwordContains = charsArray.concat(numbersArray);
  } else if (
    containNumber.dataset.use == "true" &&
    containSymbol.dataset.use == "true"
  ) {
    passwordContains = symbolsArray.concat(numbersArray);
  } else if (containNumber.dataset.use == "true") {
    passwordContains = numbersArray;
  }

  // Symbol State Check

  if (
    containSymbol.dataset.use == "true" &&
    containChars.dataset.use == "true"
  ) {
    passwordContains = charsArray.concat(symbolsArray);
  } else if (
    containSymbol.dataset.use == "true" &&
    containNumber.dataset.use == "true"
  ) {
    passwordContains = symbolsArray.concat(numbersArray);
  } else if (containSymbol.dataset.use == "true") {
    passwordContains = symbolsArray;
  }

  if (passwordContains.length > 0) {
    let newPassword = "";

    while (newPassword.length < 9) {
      newPassword += generator(passwordContains);
    }
    password.innerText = newPassword;
    newPassword = "";

    copy.dataset.copy = "true";
  }
});

copy.addEventListener("click", () => {
  if (copy.dataset.copy == "true") {
    textCopy(password.innerText);
    alarm.style.animation = `alarm-down 5s 1 ease-in`;
    setTimeout(() => {
      alarm.style.animation = "none";
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
