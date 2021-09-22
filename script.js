// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+[]{};:";
var Numbers = "0123456789";
var writePassword;
var passwordLength;

// console.log ("This a test for the array " + lowercaseLetters.length); 

passwordLength = true
function writePassword (){
passwordLength = prompt("Please input the number of characters for your password(8 < X > 128");
{if (passwordLength) {passwordLength < 8 || passwordLength > 128};
else {alert ("Incorrect Value")};
}

// Write password to the #password input needs a prompt function

  function writePassword() { 
var password = generatePassword();
var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Password Criteria
var confirmUpper = confirm("Press okay to include uppercase letters");
var confirmLower = confirm("Press okay to include lowercase letters");
var confirmNumber = confirm("Press okay to include numbers");
var confirmSpecial = confirm("Press okay to include special characters");

// Generate Criteria based on user
 
  function passwordGenerator (){
  return Math.floor(Math.random(array.length) * 10
}
      
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// document.getElementbyId("password")
// var x = document.getElementById("myBtn").textContent;


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// if length of password is >= 8 and <= 128,
// the password is valid
// else
// the password is invalid
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// var lowercase = true/false???
// var uppercase = true/false???
// var numeric = true/false???
// var special = true/false???
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// alert("Password is: ....");

// Add event listener to generate button
