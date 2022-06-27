// 1. create variables for all possible desired entries
// 2. create password generator
// 3. seems primary task is to create the function of the password generation itself

//initial thought is to create packages of possible input variables for password itself. not sure where to place this yet. 
//i think creating this as an array is correct. this way var possibleChoices can be called as a single variable in my generatePassword function from which individual items will be concatonated from each type of array and computed within the function. 


//these are the my arrays of items. i struggled with a fast way to type these out. 
const lettersUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lettersLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
const specialSymbols = ['!', '@', '#', '$', '%', '&'];
const numberPackage = ['1','2','3','3','4','5','6','7','8','9','0'];

var recordPasswordLength = 8-128;
var possibleChoices = [];

//don't think i need to change this. this is just the the variable that when invoked will grab the first instance of "#generate" from HTML, which, the event listener will give a value of click, to which writePassword will be called. 
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var completedPrompts = userPreferences();

  if (completedPrompts) {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < recordPasswordLength; i++) {
    var letterRandom = Math.floor(Math.random() * possibleChoices.length); 
    password = password + possibleChoices[letterRandom];
  }
  return password;
}


//first need to create prompts for user desire re: parameters of password
//do you want special chars, numbers, etc. 

//going to create a function called by writePassword function once prompts are correctly input. 

function userPreferences() {
  //first going to try to prompt user for parameters desired in their password.
  recordPasswordLength = prompt("Please state your password length. Your password must be between 8-128 total characters.");
//the one issue I noticed here even after I'd thought I'd solved the problem is that if the user enters a letter, the generator does not detect it as invalid. How to solve this? Going Googling. 
    if(isNaN(recordPasswordLength)){
    alert("Your chosen password length must consist of a number ranging from 8-128. Please click the generate password button and try again.");
    return false
//woohoo. this was the most satisfying line of code i've written in my 1.5 week career. it was pretty easy to find explanations of forums, as invalid entry character types is a common issue. in this case, the isNan command solved that issue. 
  } else if (recordPasswordLength >=8 && recordPasswordLength <=128) {
    alert("Your password was within expected length parameters. Please continue.");
  } else if (recordPasswordLength <8 || recordPasswordLength >128) {
    alert("Your chosen password length did not fall within expected parameters. Please try again.");
    return false
  }
 
console.log("Check if length parameters are correct");
  /* not sure how to get this else statement to work. else { (recordPasswordLength <=7 || recordPasswordLength >=129)
    alert("Your password was not within expected length parameters. Please try again.")
  } */
/*{
  else alert("Your password is within expected length parameters.");
}*/
  if (confirm("Would you like to use special characters in your password?")) {
      possibleChoices = possibleChoices.concat(specialSymbols);
  }

  if (confirm("Would you like to use numbers in your password?")) {
      possibleChoices = possibleChoices.concat(numberPackage);
  }

  if (confirm("Would you like to use lowercase characters in your password?")) {
      possibleChoices = possibleChoices.concat(lettersLower);
  }

  if (confirm("Would you like to use uppercase characters in your password?")) {
      possibleChoices = possibleChoices.concat(lettersUpper);
  }
  return true;
}


/* initial attempts at prompts. got confused by what I was doing but didn't want to delete for future reference.

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
