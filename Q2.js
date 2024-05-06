//Q2.Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm.
const arr = [5,4,3,2,1,2,3,4,5,6,7,8];
let index = (arr,key)=>{
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

console.log(index(arr,7));