// User Input
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmUppercase;

// Addition for special, #s & Alphabet characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase Conversion
space = [];
var toUpper = function(x) {
  return x.toUpperCase();
};
var choices;
// Creates Var for Uppercase Conversion
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

// generates & writes the password
function writePassword() {
  // Initial User Input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // Beginning of criteria for user selection
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Begins & Checks user initial input
    enter = parseInt(prompt("You Must Choose Between 8 and 128 Characters"));

  } else {
    // Asks whether user wants specific criteria or not
    confirmNumber = confirm("Will password contain numbers?");
    confirmCharacter = confirm("will password contian Special Characters?");
    confirmUppercase = confirm("Will password contain Uppercase letters?");
    confirmLowercase = confirm("Will password contain Lowercase lettters?");
  };


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
