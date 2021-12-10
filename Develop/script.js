// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//number generator

///////


///


///
function generatePassword() {
var pswdLength = prompt("How many Characters? between 8 and 128");
  var numConfirm = confirm('Do you want numbers in password?');
  var capConfirm = confirm('Do you want uppercases in your password?');
  var lowerConfirm = confirm('Do you want lowercases in your password?');
  var charConfirm = confirm('Do you want symbols in your password?')
  // passwordUser = parseInt(pswdLength)
  /// empty arrays
  var userArray = [];
  var resultArray = []
  var numResults = []
  var capResults = []
  var charResults = []
  var lowerResults = []
////
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function randomCaps() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function randomSymbol() {
  const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

  return symbols[Math.floor(Math.random() * symbols.length)];
}
////
const randomfun = {
  lower: randomLower,
  caps: randomCaps,
  num: randomNum,
  symbol: randomSymbol
}
  /// conditions

if (numConfirm == true) {
 numResults = String.fromCharCode(Math.floor(Math.random() * 10) + 48) 

}
if (capConfirm == true) {
capResults = String.fromCharCode(Math.floor(Math.random() * 26) + 65)  
}
if (lowerConfirm == true) {
lowerResults = String.fromCharCode(Math.floor(Math.random() * 26) + 97) 
}
if (charConfirm == true) {
  const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

charResults = symbols[Math.floor(Math.random() * symbols.length)] 
}
resultArray = resultArray.concat(charResults, lowerResults, capResults, numResults)

for (var i = 0; i < pswdLength; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length * )]); 
  }

  return userArray.join("") ;
  
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}


// generatePassword()
// 
// writePassword()