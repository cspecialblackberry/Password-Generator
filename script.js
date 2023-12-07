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

//Arrays
//lowercase
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//uppercase
const uppercase = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//numeric
const numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//special
const special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
//generated password
const passwordItem = [];

const generatePassword = () => {

passwordItem.fill();

//characterCount
var characterCount = prompt("How many characters would you like between 8 and 128?");

//enforce 8-128 character limit
for (i=0;i<1;i){
  if (characterCount<8 || characterCount>128){
    characterCount = prompt("Must be greater than 8 and less than 128.");
    i = 0;
  } else {
    i=1;
  }
}

// isLowercase
let isLowercase = confirm("Would you like lowercase letters?");
//isUppercase
let isUppercase = confirm("Would you like uppercase letters?");
//isNumeric
let isNumeric = confirm("Would you like numbers?");
//isSpecial
let isSpecial = confirm("Would you like special characters?");

// isLowercase 
if (isLowercase && !isUppercase && !isNumeric && !isSpecial){
for(i=0; i<characterCount; i++) {
  let password = lowercase[Math.floor(Math.random()*lowercase.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

// isLowercase and isUppercase
}else if (isLowercase && isUppercase && !isNumeric && !isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
const lowercaseUppercase =[...lowercase, ...uppercase];
for(i=2; i<characterCount; i++) {
  passwordItem[i] = lowercaseUppercase[Math.floor(Math.random()*lowercaseUppercase.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isLowercase and isNumeric
}else if (isLowercase && !isUppercase && isNumeric && !isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
const lowercaseNumeric = [...lowercase, ...numeric];
for(i=2; i<characterCount; i++) {
  passwordItem[i] = lowercaseNumeric[Math.floor(Math.random()*lowercaseNumeric.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isLowercase and isSpecial
}else if (isLowercase && !isUppercase && !isNumeric && isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseSpecial = [...lowercase, ...special];
for(i=2; i<characterCount; i++) {
  passwordItem[i] = lowercaseSpecial[Math.floor(Math.random()*lowercaseSpecial.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isLowercase and isUppercase and isNumeric
}else if (isLowercase && isUppercase && isNumeric && !isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[2] = numeric[Math.floor(Math.random()*numeric.length)];
const lowercaseUppercaseNumeric = [...lowercase, ...uppercase, ...numeric];
for(i=3; i<characterCount; i++) {
  passwordItem[i] = lowercaseUppercaseNumeric[Math.floor(Math.random()*lowercaseUppercaseNumeric.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isLowercase and isUppercase and isSpecial
}else if (isLowercase && isUppercase && !isNumeric && isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[2] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseUppercaseSpecial = [...lowercase, ...uppercase, ...special];
for(i=3;i<characterCount;i++){
  passwordItem[i] = lowercaseUppercaseSpecial[Math.floor(Math.random()*lowercaseUppercaseSpecial.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isLowercase and isNumeric and isSpecial
}else if (isLowercase && !isUppercase && isNumeric && isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
passwordItem[2] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseNumericSpecial = [...lowercase, ...numeric, ...special];
for(i=3;i<characterCount;i++){
  passwordItem[i] = lowercaseNumericSpecial[Math.floor(Math.random()*lowercaseNumericSpecial.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isLowercase and isUppercase and isNumeric and isSpecial
}else if (isLowercase && isUppercase && isNumeric && isSpecial){
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[2] = numeric[Math.floor(Math.random()*numeric.length)];
passwordItem[3] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseUppercaseNumericSpecial = [...lowercase, ...uppercase, ...numeric, ...special];
for(i=4;i<characterCount;i++){
  passwordItem[i] = lowercaseUppercaseNumericSpecial[Math.floor(Math.random()*lowercaseUppercaseNumericSpecial.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isUppercase 
}else if (!isLowercase && isUppercase && !isNumeric && !isSpecial){
for(i=0;i<characterCount;i++){
  passwordItem[i] = uppercase[Math.floor(Math.random()*uppercase.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isUppercase and isNumeric
}else if (!isLowercase && isUppercase && isNumeric && !isSpecial){
passwordItem[0] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
const uppercaseNumeric = [...uppercase, ...numeric];
for(i=2;i<characterCount;i++){
  passwordItem[i] = uppercaseNumeric[Math.floor(Math.random()*uppercaseNumeric.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isUppercase and isSpecial
}else if (!isLowercase && isUppercase && !isNumeric && isSpecial){
passwordItem[0] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[1] = special[Math.floor(Math.random()*numeric.length)];
const uppercaseSpecial = [...uppercase, ...special];
for(i=2;i<characterCount;i++){
  passwordItem[i] = uppercaseSpecial[Math.floor(Math.random()*uppercaseSpecial.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isUppercase and isSpecial and isNumeric
}else if (!isLowercase && isUppercase && isNumeric && isSpecial){
passwordItem[0] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[1] = special[Math.floor(Math.random()*numeric.length)];
passwordItem[2] = numeric[Math.floor(Math.random()*numeric.length)];
const uppercaseSpecialNumeric = [...uppercase, ...special, ...numeric];
for(i=3;i<characterCount;i++){
  passwordItem[i] = uppercaseSpecialNumeric[Math.floor(Math.random()*uppercaseSpecialNumeric.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isSpecial
}else if (!isLowercase && !isUppercase && !isNumeric && isSpecial){
for(i=0;i<characterCount;i++){
  passwordItem[i] = special[Math.floor(Math.random()*special.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isSpecial and isNumeric
}else if (!isLowercase && !isUppercase && isNumeric && isSpecial){
passwordItem[0] = special[Math.floor(Math.random()*numeric.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
const specialNumeric = [...special, ...numeric];
for(i=2;i<characterCount;i++){
  passwordItem[i] = specialNumeric[Math.floor(Math.random()*specialNumeric.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

//isNumeric
}else if (!isLowercase && !isUppercase && isNumeric && !isSpecial){
for(i=0;i<characterCount;i++){
  passwordItem[i] = numeric[Math.floor(Math.random()*numeric.length)];
}
let passwordItemString = passwordItem.join("");
return passwordItemString;

}else {
  return ("Must select at least one criteria.")
}
}

//copy password to clipboard

const copyPassword = (event) => {
  event.preventDefault();
  let passwordItemString = passwordItem.join("");
  navigator.clipboard.writeText(passwordItemString);
  alert('Password copied');
}

copyBtn.addEventListener('click', copyPassword);
