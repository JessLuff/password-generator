// Assignment Code
var generateBtn = document.querySelector("#generate");

// List of special characters to randomly select from
var optSpec = [" ", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", ">", "=", "?", "@", "[", "]", "/", "_", "^", "{", "}", "|", "~"];
// List of number characters to randomly select from
var optNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// List of lowercase characters to randomly select from
var optLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// List of uppercase characters to randomly select from
var optUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The next character type in the cycle is passed into this function, to have a character randomly selected from the array.
function randSelect(charArray){
  var index = Math.floor(Math.random() * charArray.length);
  var charRand = charArray[index];
  return charRand;
}

function generatePassword(){
  // This window requests the length of the password and returns an alert if an invalid number is entered or none at all
  var passLength = window.prompt("Please enter the number of characters required. Must be at least 8, but no more than 126.");
  if (!passLength || passLength<8 || passLength >126){
    window.alert("Password must contain 8-126 characters");
    return;
  }

  // These windows confirm which character type the password should contain
  var charSpec = window.confirm("Include special characters?");
  var charNum = window.confirm("Include numbers characters?");
  var charLower = window.confirm("Include lowercase characters?");
  var charUpper = window.confirm("Include uppercase characters?");
  //Array charCheck saves the answers from above
  var charCheck = [charSpec, charNum, charLower, charUpper];

  if (!charSpec && !charNum && !charLower && !charUpper){
    window.alert("Password cannot be empty, please include a character type");
    return;
  } 

  // Initialises password array
  var password = new Array(passLength);
  var i;
  var cycle = 0;
  var opt;
  var charNext;
  for (i = 0; i<passLength; i++){
    // Cycle through charCheck array to select a character type to be included in the password
    while(!charCheck[cycle]){
      cycle++;
      console.log(cycle);
      if(cycle>4){
        cycle = 0;
      }
    }
    // Switch to select which array to choose random character from
    switch(cycle){
      case 0:
        charNext = randSelect(optSpec);
        break;
      case 1:
        charNext = randSelect(optNum);
        break;
      case 2:
        charNext = randSelect(optLower);
        break;
      case 3:
        charNext = randSelect(optUpper);
        break;
    }

    //The randomly selected character is added to the password array
    password[i] = charNext;
    cycle++; //Selects the next character type
  }
  var passFinal = password.join("");
  return passFinal;
}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

