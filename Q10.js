//Q10.Write a JavaScript function to validate whether a given value type is null or not
var value1 = 13;
var value2 = null;
var value3 = "string";
var value4 = "";
var value5 = {};
function isNull(val) {
    if(val === null){
        return true;
    }
    return false;
}
console.log(isNull(value1));
console.log(isNull(value2));
console.log(isNull(value3));
console.log(isNull(value4));
console.log(isNull(value5));
