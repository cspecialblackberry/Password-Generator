// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
let generatedPassword = []



const generatePassword = () => {

//reset array incase last run had longer character count
generatedPassword.fill()

var characterCount = prompt("How many characters would you like between 8 and 128?")

  if (characterCount<8 || characterCount>128){
    alert("Must be greater than 8 and less than 128.")
    return "please try again"}

let isLowercase = confirm("Would you like lowercase letters?")
let isUppercase = confirm("Would you like uppercase letters?")
let isNumeric = confirm("Would you like numbers?")
let isSpecial = confirm("Would you like special characters?")
//generate array outside of function so both functions can use
let passwordItem = []

if (isLowercase) {
passwordItem= passwordItem.concat(lowercase)
}
if (isUppercase) {
  passwordItem= passwordItem.concat(uppercase)
  }
if (isNumeric) {
  passwordItem= passwordItem.concat(numeric)
  }
if (isSpecial) {
  passwordItem= passwordItem.concat(special)
  }
if(passwordItem.length===0){
  alert("Must select at least one character type.")
  return "please try again";
}

for(var i=0; i<characterCount; i++) {
  generatedPassword[i]= passwordItem[Math.floor(Math.random()*passwordItem.length)]
}

//force to include at least one of each selected criteria
let newString =""
if (isLowercase){
  generatedPassword[0]= lowercase[Math.floor(Math.random()*lowercase.length)]
}
if (isUppercase){
  generatedPassword[1]= uppercase[Math.floor(Math.random()*uppercase.length)]
}
if (isNumeric){
  generatedPassword[2]= numeric[Math.floor(Math.random()*numeric.length)]
}
if (isSpecial){
  generatedPassword[3]= special[Math.floor(Math.random()*special.length)]
}
let generatedPasswordString = generatedPassword.join("")
return generatedPasswordString
}


//copy to clipboard function
const copyPassword = (event) => {
  event.preventDefault();
  let generatedPasswordString = generatedPassword.join("")
  navigator.clipboard.writeText(generatedPasswordString)
  alert('Password copied');
}

copyBtn.addEventListener('click', copyPassword);



