
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-[]{}|/?><`~";

var finalPassword = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("How many characters? (Min:8 max:128)");

    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      var lowerCaseChars = confirm(
        "Do you want lowercase letters in your password?");
      var upperCaseChars = confirm("Do you want uppercase letters in your password?");
      var numberChars = confirm("Do you want numbers in your password?");
      var specialChars = confirm("Do you want special characters in your password?");
    } else {
      passwordLength === false;
      alert("Please follow the rules!");
    }





  console.log(passwordLength, lowerCaseChars, upperCaseChars, numberChars, specialChars);
  console.log(typeof(passwordLength));

  for (var i = 0; i < passwordLength.length; i++) {

    function randomLowerCase(lowercaseLetters) {
      return lowercaseLetters[
        Math.floor(Math.random() * lowercaseLetters.length)
      ];
    }

    function randomUpperCase(uppercaseLetters) {
      return uppercaseLetters[
        Math.floor(Math.random() * uppercaseLetters.length)
      ];
    }

    function randomNumbers(numbers) {
      return numbers[Math.floor(Math.random() * numbers.length)];
    }

    function randomSymbols(symbols) {
      return symbols[Math.floor(Math.random() * symbols.length)];
    }

  }

  console.log(randomLowerCase(lowercaseLetters));
  console.log(randomUpperCase(uppercaseLetters));
  console.log(randomNumbers(numbers));
  console.log(randomSymbols(symbols));


}
