//Q8.Write a JavaScript program to sort the characters in a string alphabetically. 
const myString = "scdoaebm";

const sortChars = (myString) => myString.split("").sort().join("");

console.log(sortChars(myString));