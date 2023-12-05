// Assignment Code
var generateBtn = document.querySelector("#generate");

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

const passwordItem = [];

const generatePassword = () => {

passwordItem.fill();
console.log(passwordItem);

//characterCount
let characterCount = prompt("How many characters would you like between 8 and 128?");

if (characterCount < 8) {
  let characterCount = prompt("Must be greater than 8 and less than 128.");
}else if (characterCount > 128) {
  let characterCount = prompt("Must be greater than 8 and less than 128.");
}

console.log(characterCount);
// isLowercase
let isLowercase = confirm("Would you like lowercase letters?");
console.log(isLowercase);
//isUppercase
let isUppercase = confirm("Would you like uppercase letters?");
console.log(isUppercase);
//isNumeric
let isNumeric = confirm("Would you like numbers?");
console.log(isNumeric);
//isSpecial
let isSpecial = confirm("Would you like special characters?");
console.log(isSpecial);

// isLowercase 
if (isLowercase && !isUppercase && !isNumeric && !isSpecial){
console.log("L");
for(i=0; i<characterCount; i++) {
  let password = lowercase[Math.floor(Math.random()*lowercase.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

// isLowercase and isUppercase
}else if (isLowercase && isUppercase && !isNumeric && !isSpecial){
console.log("LU");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
const lowercaseUppercase =[...lowercase, ...uppercase];
for(i=2; i<characterCount; i++) {
  passwordItem[i] = lowercaseUppercase[Math.floor(Math.random()*lowercaseUppercase.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isLowercase and isNumeric
}else if (isLowercase && !isUppercase && isNumeric && !isSpecial){
console.log("LN");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
const lowercaseNumeric = [...lowercase, ...numeric];
for(i=2; i<characterCount; i++) {
  passwordItem[i] = lowercaseNumeric[Math.floor(Math.random()*lowercaseNumeric.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isLowercase and isSpecial
}else if (isLowercase && !isUppercase && !isNumeric && isSpecial){
console.log("LS");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseSpecial = [...lowercase, ...special];
for(i=2; i<characterCount; i++) {
  passwordItem[i] = lowercaseSpecial[Math.floor(Math.random()*lowercaseSpecial.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isLowercase and isUppercase and isNumeric
}else if (isLowercase && isUppercase && isNumeric && !isSpecial){
console.log("LUN");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[2] = numeric[Math.floor(Math.random()*numeric.length)];
const lowercaseUppercaseNumeric = [...lowercase, ...uppercase, ...numeric];
for(i=3; i<characterCount; i++) {
  passwordItem[i] = lowercaseUppercaseNumeric[Math.floor(Math.random()*lowercaseUppercaseNumeric.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isLowercase and isUppercase and isSpecial
}else if (isLowercase && isUppercase && !isNumeric && isSpecial){
console.log("LUS");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[2] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseUppercaseSpecial = [...lowercase, ...uppercase, ...special];
for(i=3;i<characterCount;i++){
  passwordItem[i] = lowercaseUppercaseSpecial[Math.floor(Math.random()*lowercaseUppercaseSpecial.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isLowercase and isNumeric and isSpecial
}else if (isLowercase && !isUppercase && isNumeric && isSpecial){
console.log("LNS");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
passwordItem[2] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseNumericSpecial = [...lowercase, ...numeric, ...special];
for(i=3;i<characterCount;i++){
  passwordItem[i] = lowercaseNumericSpecial[Math.floor(Math.random()*lowercaseNumericSpecial.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isLowercase and isUppercase and isNumeric and isSpecial
}else if (isLowercase && isUppercase && isNumeric && isSpecial){
console.log("LUNS");
passwordItem[0] = lowercase[Math.floor(Math.random()*lowercase.length)];
passwordItem[1] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[2] = numeric[Math.floor(Math.random()*numeric.length)];
passwordItem[3] = special[Math.floor(Math.random()*numeric.length)];
const lowercaseUppercaseNumericSpecial = [...lowercase, ...uppercase, ...numeric, ...special];
for(i=4;i<characterCount;i++){
  passwordItem[i] = lowercaseUppercaseNumericSpecial[Math.floor(Math.random()*lowercaseUppercaseNumericSpecial.length)];
  console.log(passwordItem[i])
  var passwordItemString = passwordItem.join("");
}
console.log(passwordItem);
return passwordItemString;

//isUppercase 
}else if (!isLowercase && isUppercase && !isNumeric && !isSpecial){
console.log("U");
for(i=0;i<characterCount;i++){
  passwordItem[i] = uppercase[Math.floor(Math.random()*uppercase.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isUppercase and isNumeric
}else if (!isLowercase && isUppercase && isNumeric && !isSpecial){
console.log("UN");
passwordItem[0] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
const uppercaseNumeric = [...uppercase, ...numeric];
for(i=2;i<characterCount;i++){
  passwordItem[i] = uppercaseNumeric[Math.floor(Math.random()*uppercaseNumeric.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isUppercase and isSpecial
}else if (!isLowercase && isUppercase && !isNumeric && isSpecial){
console.log("US");
passwordItem[0] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[1] = special[Math.floor(Math.random()*numeric.length)];
const uppercaseSpecial = [...uppercase, ...special];
for(i=2;i<characterCount;i++){
  passwordItem[i] = uppercaseSpecial[Math.floor(Math.random()*uppercaseSpecial.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isUppercase and isSpecial and isNumeric
}else if (!isLowercase && isUppercase && isNumeric && isSpecial){
console.log("USN");
passwordItem[0] = uppercase[Math.floor(Math.random()*uppercase.length)];
passwordItem[1] = special[Math.floor(Math.random()*numeric.length)];
passwordItem[2] = numeric[Math.floor(Math.random()*numeric.length)];
const uppercaseSpecialNumeric = [...uppercase, ...special, ...numeric];
for(i=3;i<characterCount;i++){
  passwordItem[i] = uppercaseSpecialNumeric[Math.floor(Math.random()*uppercaseSpecialNumeric.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isSpecial
}else if (!isLowercase && !isUppercase && !isNumeric && isSpecial){
console.log("S");
for(i=0;i<characterCount;i++){
  passwordItem[i] = special[Math.floor(Math.random()*special.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isSpecial and isNumeric
}else if (!isLowercase && !isUppercase && isNumeric && isSpecial){
console.log("SN");
passwordItem[0] = special[Math.floor(Math.random()*numeric.length)];
passwordItem[1] = numeric[Math.floor(Math.random()*numeric.length)];
const specialNumeric = [...special, ...numeric];
for(i=2;i<characterCount;i++){
  passwordItem[i] = specialNumeric[Math.floor(Math.random()*specialNumeric.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

//isNumeric
}else if (!isLowercase && !isUppercase && isNumeric && !isSpecial){
console.log("N");
for(i=0;i<characterCount;i++){
  passwordItem[i] = numeric[Math.floor(Math.random()*numeric.length)];
  console.log(passwordItem[i]);
  var passwordItemString = passwordItem.join("");
}
return passwordItemString;

}else {
  return ("Must select at least one criteria.")
}
}
