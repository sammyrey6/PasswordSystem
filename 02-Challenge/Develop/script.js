// Assignment Code
let specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

let lowercaseChar = [
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
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];



let numberChar = Math.floor(Math.random() * 10);

let special = document.querySelector("input[name = specialCharacters]");
let numbers = document.querySelector("input[name = numbers]");
let uppercase = document.querySelector("input[name = uppercase]")
let passwordLength = document.getElementById("characterRange").value || document.getElementById("characterNumber").value
console.log(passwordLength)

special.addEventListener('change', function () {
  const randomIndex = Math.floor(Math.random() * specialChar.length)
  if (this.checked) {
    const randomSpecialChar = specialChar[randomIndex];

    console.log(randomSpecialChar);
  }
});

numbers.addEventListener('change', function () {
  if (this.checked) {
    console.log("checked")
  } else {
    console.log("unchecked")
  }
});

uppercase.addEventListener('change', function () {
  if (this.checked) {
    console.log("checked")
  } else {
    console.log("unchecked")
  }
});

//password generator
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.textContent = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordText.textContent += password[i];
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//;

