/*

function writePassword() {
  // 1. prompt user for parameters
  // 2. length, special chars, numbers, uppercase, lowercase
  // 3. create random from password from available characters
  // 4. for loop run the number of times that user sets length to 
  // add random character to password string
return password
}

var generateBtn = document.querySelector("#generate");
*/ 

var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener('click', writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//experimental code

//took me a long time to figure out that the add event listener needs to be IN the function
function generatePassword() {
  alert("You will now select the criteria for your password.");
  return password;
};
