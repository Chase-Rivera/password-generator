// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","#","`","$","%","'","`",",","-","_",".",";",":","&","^","<",">","/","?","[","]","{","}","|","~"];


function generatePassword() {

    var password = "";

    // asked user how long password will be and store their answer in a variable called 'passwordLength'

    var passwordLength = 8;
    alert()
    confirm()
    prompt()

    // validated the 'passwordLength' to varify that it was between 8-128
    // IF 'passwordlength' is NOT valid
    // THEN display a message to te user that "please provide valid password length between 8 and 128"
    // And then 'return "":'
    
    // ask the user if the 'wantLowercase' letters and store it in a variable
    var wantLowercase = false;

    // ask the user if the 'wantLowercase' letters and store it in a variable
    var wantUppercase = false;

    // ask the user if the 'wantSpecial' letters and store it in a variable
    var wantSpecial = false;

    // ask the user if the 'wantNumbers' letters and store it in a variable
    var wantNumbers = false;

    if( !wantLowercase && !wantUppercase ) {

        // Then display a message to the user that says "please select at least one character"
        // AND THEN 'return "";

    }

    var character = []

    // IF the user 'wantLowercase'
    //THEN combine 'lowercase' with 'characters' list
    // AND THEN select one random letter from 'lowercase' and append to 'password'

    // repeat per character choice

    // iterate randomly selecting a character from 'characters' and apending is to 'password'



    return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
