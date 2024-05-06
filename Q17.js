//Q17.Write a JavaScript function to split a string and convert it into an array of words

const string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, facilis?"
const wordArray = (string)=>{
    return string.split(" ");
};
console.log(wordArray(string));