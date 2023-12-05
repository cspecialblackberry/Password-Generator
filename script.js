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

let lowercaseItem = lowercase[Math.floor(Math.random()*lowercase.length)];
console.log(lowercaseItem);

const generatePassword = () => {

//Prompts 
// #character 8-128
let characterCount = prompt("How many characters would you like between 8 and 128?");
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


//generate password matching criteria  lowercase done

// isLowercase 
if (isLowercase && !isUppercase && !isNumeric && !isSpecial){
console.log("L");
for(i=0; i<characterCount; i++) {
  let passwordItem = lowercase[Math.floor(Math.random()*lowercase.length)];
  console.log(passwordItem)
}

// isLowercase and isUppercase

}else if (isLowercase && isUppercase && !isNumeric && !isSpecial){
console.log("LU");
const lowercaseUppercase =[...lowercase, ...uppercase];
for(i=0; i<characterCount; i++) {
  let passwordItem = lowercaseUppercase[Math.floor(Math.random()*lowercaseUppercase.length)];
  console.log(passwordItem)
}


//isLowercase and isNumeric
}else if (isLowercase && !isUppercase && isNumeric && !isSpecial){
console.log("LN");
const lowercaseNumeric = [...lowercase, ...numeric];
for(i=0; i<characterCount; i++) {
  let passwordItem = lowercaseNumeric[Math.floor(Math.random()*lowercaseNumeric.length)];
  console.log(passwordItem)
}

//isLowercase and isSpecial
}else if (isLowercase && !isUppercase && !isNumeric && isSpecial){
console.log("LS");
const lowercaseSpecial = [...lowercase, ...special];
for(i=0; i<characterCount; i++) {
  let passwordItem = lowercaseSpecial[Math.floor(Math.random()*lowercaseSpecial.length)];
  console.log(passwordItem);
}

//isLowercase and isUppercase and isNumeric
}else if (isLowercase && isUppercase && isNumeric && !isSpecial){
console.log("LUN");
const lowercaseUppercaseNumeric = [...lowercase, ...uppercase, ...numeric];
for(i=0; i<characterCount; i++) {
  let passwordItem = lowercaseUppercaseNumeric[Math.floor(math.random()*lowercaseUppercaseNumeric.length)];
  console.log(passwordItem);
}

//isLowercase and isUppercase and isSpecial
}else if (isLowercase && isUppercase && !isNumeric && isSpecial){
console.log("LUS");
const lowercaseUppercaseSpecial = [...lowercase, ...uppercase, ...special];
for(i=0;i<characterCount;i++){
  let passwordItem = lowercaseUppercaseSpecial[Math.floor(Math.random()*lowercaseUppercaseSpecial.length)];
  console.log(passwordItem);
}

//isLowercase and isNumeric and isSpecial
}else if (isLowercase && !isUppercase && isNumeric && isSpecial){
console.log("LNS");
const lowercaseNumericSpecial = [...lowercase, ...numeric, ...special];
for(i=0;i<characterCount;i++){
  let passwordItem = lowercaseNumericSpecial[Math.floor(Math.random()*lowercaseNumericSpecial.length)];
  console.log(passwordItem);
}

//isLowercase and isUppercase and isNumeric and isSpecial
}else if (isLowercase && isUppercase && isNumeric && isSpecial){
console.log("LUNS");
const lowercaseUppercaseNumericSpecial = [...lowercase, ...uppercase, ...numeric, ...special];
for(i=0;i<characterCount;i++){
  let passwordItem = lowercaseUppercaseNumericSpecial[Math.floor(Math.random()*lowercaseUppercaseNumericSpecial.length)];
  console.log(passwordItem)
}

//isUppercase 
}else if (!isLowercase && isUppercase && !isNumeric && !isSpecial){
console.log("U");
for(i=0;i<characterCount;i++){
  let passwordItem = uppercase[Math.floor(Math.random()*uppercase.length)];
  console.log(passwordItem);
}

//isUppercase and isNumeric
}else if (!isLowercase && isUppercase && isNumeric && !isSpecial){
console.log("UN");
//isUppercase and isSpecial
}else if (!isLowercase && isUppercase && !isNumeric && isSpecial){
console.log("US");
//isUppercase and isSpecial and isNumeric
}else if (!isLowercase && isUppercase && isNumeric && isSpecial){
console.log("USN");

//isSpecial
}else if (!isLowercase && !isUppercase && !isNumeric && isSpecial){
console.log("S");
//isSpecial and isNumeric
}else if (!isLowercase && !isUppercase && isNumeric && isSpecial){
console.log("SN");

//isNumeric
}else if (!isLowercase && !isUppercase && isNumeric && !isSpecial){
console.log("N");
}else {
  console.log("Must select at least one criteria.")
}

//else (none)



//display password on alert or on page

}