//Q9.Write a JavaScript program to check if a numeric array is sorted or not. 
const arr1 = [4,3,6,5,2,1];
const arr2 = [12,23,45,63,67];

function isSorted(arr){

    for (let i = 0; i < arr.length -1; i++) {
        if(arr[i+1] < arr[i]) return false;
    }
    return true;
}
console.log(isSorted(arr1));
console.log(isSorted(arr2));