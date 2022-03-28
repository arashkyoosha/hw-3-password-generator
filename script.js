
// User input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// char variables
var symbols = "!@#$%^&*()_+=-[]{}|/?><`~";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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


// generate password function
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));
  // First if statement for user validation
  if (!enter) {
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Continues once user input is validated
    confirmLowercase = confirm("Do you want lowercase letters in your password?");
    confirmUppercase = confirm("Do you want uppercase letters in your password?");
    confirmNumber = confirm("Do you want numbers in your password?");
    confirmCharacter = confirm("Do you want special characters in your password?");
  }

  // Else if for 4 negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = symbols.concat(number, lowercase, uppercase);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = symbols.concat(number, uppercase);
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = symbols.concat(number, lowercase);
  } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = symbols.concat(lowercase, uppercase);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowercase, uppercase);
  }
  // Else if for 2 positive options
  else if (confirmCharacter && confirmNumber) {
    choices = symbols.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
    choices = symbols.concat(lowercase);
  } else if (confirmCharacter && confirmUppercase) {
    choices = symbols.concat(uppercase);
  } else if (confirmLowercase && confirmNumber) {
    choices = lowercase.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    choices = lowercase.concat(uppercase);
  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(uppercase);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
    choices = symbols;
  } else if (confirmNumber) {
    choices = number;
  } else if (confirmLowercase) {
    choices = lowercase;
  }
  
  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}
