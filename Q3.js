//Q3.Write a JavaScript program to sort a list of elements using Quick sort.
const arr = [3,5,2,56,1,23,7];
function partition(arr,low,high) {
    let pivot = arr[low];
    let i= low ,j = high;
    while(i<j){
        while(arr[i] <= pivot && i<=high-1){
            i++;
        }
        while(arr[j] > pivot && j>=low + 1){
            j--;
        }
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

function QuickSort(arr,low,high){
    if(low < high){
        let pIndex = partition(arr,low,high);
        QuickSort(arr,low,pIndex-1);
        QuickSort(arr,pIndex+1,high);
    }
    return arr;
}

console.log(QuickSort(arr,0,arr.length -1));