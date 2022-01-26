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

  // User must input atleast one chosen criteria for password
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose atleast one specified criteria!");
  }

  // Else conditional statement for 4 true criterias selected
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }

  // Else conditional statement for 3 true criterias selected
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }

  // Else conditional statement for 2 true criterias selected
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } 
  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  } 
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  } 
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } 
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  } 
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }

  // Else conditional statement for 1 true criteria selected
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }

  // Put space in for uppercase
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  // Array Length placeholder
  var password = [];

  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
