let stringToChange = "Akademia108";
let reversedString = "";

reversedString = stringToChange.split('').reduce((outputString, currentChar) =>{
    return currentChar + outputString;
}, "");

console.log(reversedString);
