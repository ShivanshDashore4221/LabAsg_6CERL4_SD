//Q18. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

const string = "Hello WORLDs";
function changeCase(string){
        var toggledStr = "";
        for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i);
            if (char === char.toUpperCase()) {
                toggledStr += char.toLowerCase();
            } else {
                toggledStr += char.toUpperCase();
            }
        }
    return toggledStr;
}
console.log(changeCase(string));