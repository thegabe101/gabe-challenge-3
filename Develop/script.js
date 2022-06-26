//initial thought is to create packages of possible input variables for password itself. not sure where to place this yet. 

const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersLower = "abcdefghijklmnopqrstuvwxz";
const specialSymbols = "!@#$%^&*";
const numberPackage = "12334567890";


var generateBtn = document.querySelector("#generate");

//first need to create prompts for user desire re: parameters of password
//do you want special chars, numbers, etc. 
//create variables for all possible desired entries
//create password generator
//seems primary task is to creat the function of the password generation itself

/*

function generatePassword() {
  console.log("This button seems to be working. Now I need to define the function.");
alert("You will now select the criteria for your password.");
      console.log("OK, this popup is working");
  //get confirmation from user on length parameters
  var passLength = prompt("Please state your password length. Your password must be between 8-128 total characters.");
  if (passLength >=8 && passLength <=128) {
    alert("Your password length is accepted.")  
  } else 
    alert("Your password length is not within expected parameters.")
      console.log("recordPasswordLength");
  
    //get confirmation from user on special characters or not
    var passwordChars = confirm("Will you be using special characters in your password length? OK = Yes, Cancel = No");
  if (passwordChars == true) {
    alert("You have chosen to use special characters in your password.")
  } else (passwordChars == false) 
    alert("Your password will not include special characters.")
      console.log("record-special-characters")

    var lowerCase = prompt("Would you like your password to include special characters?");
    if (lowerCase == true) {
    alert("Your password will include lowercase characters.")
    } else (lowerCase == false) 
        alert("Your password will not include lowercase characters.")
  
}

*/

function (generatePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
