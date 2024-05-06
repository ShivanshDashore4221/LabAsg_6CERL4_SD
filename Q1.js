//Q1.Write a JavaScript program to find all the index positions of a given word within a given string.
const testString = "test";
const para = "test subject : maths, test duration: 90 mins, test max marks : 30";
const indexes = (para,testString)=>{
    let indexArr = [];
    let ind = para.indexOf(testString);
    while(ind != -1){
        indexArr.push(ind);
        ind = para.indexOf(testString,ind+1);
    }
    return indexArr;
}

console.log(indexes(para,testString));

