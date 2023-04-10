// Assignment Code
// variables being declared utilizing the query selector 
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// create an array of characters in order to generate random passwords when button is clicked  
var lowercaseArray = ['abcdefghijklmnopqrstuvwxyz'];
var uppercaseArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var characterArray = ['!@#$%^&*-_+'];
var numericArray = ['0123456789'];
var passwordCriteria = '';

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

// random password generator for results
password.value === '';
var randomPassword = '';

// users must decide on their qualifications for the random password to be generated
  var lowercase = confirm("Requires lowercase letters?");
  var uppercase = confirm("Requires uppercase letters?");
  var character = confirm("Requires special character?");
  var numeric = confirm("Requires a number?");
  var passwordLength = prompt("Please choose a number between 8 and 16 to generate your password");

// prompt verification for password length
if (passwordLength < 8 || passwordLength > 16) {
  alert('Your password must be between 8 and 16 characters long, try again!')
  var passwordLength = prompt("Please choose a number between 8 and 16 to generate your password");
}
// user must meet one of the following criteria in order to generate password
else if (uppercase === false && uppercase === false && numeric === false && character === false) {
  alert('Click ok to generate password following password criteria')
  var lowercase = confirm("Requires lowercase letters?");
  var uppercase = confirm("Requires uppercase letters?");
  var character = confirm("Requires special character?");
  var numeric = confirm("Requires a number?");
}
if (lowercase) {
  passwordCriteria += lowercaseArray;
}
if (uppercase) {
  passwordCriteria += uppercaseArray;
}
if (character) {
  passwordCriteria += characterArray;
}
if (numeric) {
  passwordCriteria += numericArray;
}
// allows a random password to be generated
for (var i = 0; i < passwordLength; i++) {
  randomPassword += passwordCriteria.charAt(Math.floor(Math.random() * passwordCriteria.length));
}
password.value = randomPassword;
}
