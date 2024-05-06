//Q11.Write a JavaScript function to validate whether a given value is a number or not
var num1 = 10;
var num2 = null;
var num3 = "number";
function isNumber(num){
    if(typeof num === "number"){
        return true;
    }
    return false;
} 
console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));