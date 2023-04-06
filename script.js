// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}
// create an array of characters in order to generate random passwords when button is clicked  
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", '++'];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", '++'];
var characterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+'];
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var passwordText = document.querySelector("#password");

var resultArray = [random];

// password prompt generator question
var randomPassword = prompt ('This will generate a random password 10 characters long')

//conditions of the arrays 
if (numeric) {
  resultArray = resultArray.concat(numericArray)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
