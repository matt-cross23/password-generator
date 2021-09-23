// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = [
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
var upperCaseLetters = [
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
];
var specialCharacters = [
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
  "_",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var criteria = [];
var chosenCharacters = [];

// console.log ("This a test for the array " + lowercaseLetters.length);
passwordLength = true;

function generatePassword() {
  passwordLength = prompt(
    "Please input the number of characters for your password(8 < X > 128"
  );
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Please input the number of characters for your password(8 < X > 128"
    );
  }
  var confirmUpper = confirm("Press okay to include uppercase letters");
  var confirmLower = confirm("Press okay to include lowercase letters");
  var confirmNumber = confirm("Press okay to include numbers");
  var confirmSpecial = confirm("Press okay to include special characters");
  if (confirmUpper === true) {
    chosenCharacters = chosenCharacters.concat(upperCaseLetters);
  }
  if (confirmLower === true) {
    chosenCharacters = chosenCharacters.concat(lowercaseLetters);
  }
  if (confirmNumber === true) {
    chosenCharacters = chosenCharacters.concat(Numbers);
  }
  if (confirmSpecial === true) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }
  var password = ''
  for (var i = 0; i < passwordLength; i++) {
    password+=chosenCharacters[ Math.floor(Math.random() * chosenCharacters.length)]
  }
  alert("Your password is" + (password) + " !!!")
  return (password);
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


