//Q6.Write a JavaScript program to sort a list of elements using Insertion sort
const arr = [13, 46, 24, 52, 9, 20];
function InsertionSort(arr) {
    for (let i = 1; i < arr.length ; i++) {
        let j=i;
        while(j>0 && arr[j]< arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}
console.log(InsertionSort(arr));
