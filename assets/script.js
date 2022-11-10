//javacsript variables established below

var numerals = [1,2,3,4,5,6,7,8,9,0]
var lowercase = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'",];
var passwordLength = 0
var possibleChar = []
var passwordResult = ""

// 

function generatePassword() {
// determine the length of your password while preventing them from selecting an input of less than 8 characters
// more than 128 characters, entering in a null, or entering in a non-number

  while(parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || parseInt(passwordLength) == "" || isNaN(parseInt(passwordLength))) {
    passwordLength = prompt("How many characters would you like your password to be? Minimum is 8, Maximum is 128")
  }

// user selects criteria for their password (lowercase, uppercase, number, special characters)
  var passwordLowerCase = confirm("Do you want your password to contain lowercase characters?");
  if (passwordLowerCase === true){
    possibleChar = possibleChar.concat(lowercase)
  }
var passwordUpperCase = confirm("Do you want your password to contain upper-case characters?");
  if (passwordUpperCase === true){
     possibleChar = possibleChar.concat(uppercase)
}
var passwordNumeric  = confirm("Do you want your password to contain numbers?")
if (passwordNumeric === true){
  possibleChar = possibleChar.concat(numerals)
}
var passwordSpecialChar = confirm("Do you want your password to contain special characters? (ex. $,%,#,@)")
if (passwordSpecialChar === true){
  possibleChar = possibleChar.concat(specialChar)
}
// prevent user from answering no to all of the crtieria
if (passwordLowerCase === false && passwordUpperCase === false && passwordNumeric === false && passwordSpecialChar === false){
  alert("You must select at least one type of character in order to create your password")
  window.location.reload()
}

// generates the password utilizing the selected inputs from the user above
for (i=0, n=possibleChar.length; i<parseInt(passwordLength); i++) {
 passwordResult += possibleChar[Math.floor(Math.random()*n)]
  }
return passwordResult
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
