const btnGeneratePass = document.querySelector(".btn-generate-pass");
const passwordField = document.querySelector(".the-password");
const btnCopy = document.querySelector(".btn-copy");

let password = "";

btnGeneratePass.addEventListener("click", function () {
  const length = document.querySelector("#length").value;

  if (!length) {
    alert("Please choose the length of the password!");
    return;
  }

  const lowercase = document.querySelector("#lowercase").checked;
  const uppercase = document.querySelector("#uppercase").checked;
  const number = document.querySelector("#numbers").checked;
  const symbol = document.querySelector("#symbols").checked;

  if (!lowercase && !uppercase && !number && !symbol) {
    alert("Please select something to include in the password!");
    return;
  }

  password = "";
  for (let i = 0; i < length; i++) {
    const array = [];
    if (lowercase) array.push(String.fromCharCode(randomNumber(97, 122)));
    if (uppercase) array.push(String.fromCharCode(randomNumber(65, 90)));
    if (number) array.push(String.fromCharCode(randomNumber(48, 57)));
    if (symbol) array.push(String.fromCharCode(randomNumber(33, 41)));
    const isko = randomNumber(0, array.length - 1);
    password = password.concat(array[isko]);
  }

  passwordField.value = password;
  console.log(password);
});

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard.");
});

const randomNumber = function (min, max) {
  const diff = max - min + 1;
  return Math.trunc(Math.random() * diff) + min;
};

let char = String.fromCharCode(randomNumber(48, 57));
console.log(char);

console.log();
