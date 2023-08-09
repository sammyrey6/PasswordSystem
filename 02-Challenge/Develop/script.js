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

let numberChar = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
]

// ✅ convert all array elements to uppercase

const uppercaseChar = lowercaseChar.map(element => {
  return element.toUpperCase();
});





let special = document.querySelector("input[name = specialCharacters]");
let numbers = document.querySelector("input[name = numbers]");
let uppercase = document.querySelector("input[name = uppercase]")
let passwordLength = document.getElementById("characterRange").value || document.getElementById("characterNumber").value
console.log(passwordLength)


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = document.getElementById("characterRange").value || document.getElementById("characterNumber").value
  var password = "";
  var passwordCharSet = "";
  var passwordCharSetArray = [];

  if (special.checked) {
    passwordCharSetArray.push(specialChar);
  }

  if (numbers.checked) {
    passwordCharSetArray.push(numberChar);
  }

  if (uppercase.checked) {
    passwordCharSetArray.push(uppercaseChar);
  }

  if (passwordCharSetArray.length === 0) {
    passwordCharSetArray.push(lowercaseChar);
  }
// allow for lowercase characters too 
// combine all character sets into one string and shuffle it
  for (var i = 0; i < passwordCharSetArray.length; i++) {
    passwordCharSet += passwordCharSetArray[i];
  }
  // loop through length of desired password, randomly selecting a char from each set
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharSetArray.length);
    var randomCharSet = passwordCharSetArray[randomIndex];
    var randomCharIndex = Math.floor(Math.random() * randomCharSet.length);
    var randomChar = randomCharSet[randomCharIndex];
    password += randomChar;
  }

  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//;

