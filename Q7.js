//Q7.Write a JavaScript program to sort a list of elements using Bubble sort 

const arr = [13, 46, 24, 52, 9, 20];
function BubbleSort(arr) {
    for (let i = 0; i < arr.length ; i++) {
        var didSwap=0;
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                didSwap = 1;
            }
        }
        if(didSwap==0) break;
    }

    return arr;
}
console.log(BubbleSort(arr));
