// 4.Write a JavaScript program to sort a list of elements using Merge sort.
const arr = [13, 46, 24, 52, 9, 20,2,9];

function MergeSort(arr,low,high){
    if(low >= high) return;
    let mid = Math.floor((low+high)/2);
    MergeSort(arr,low,mid);
    MergeSort(arr,mid+1,high);
    Merge(arr,low,mid,high);

    return arr;
}
function Merge(arr,low,mid,high){
    let temp = [];
    let left = low;
    let right = mid+1;
    while(left<=mid && right<=high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++;
        }
        else{
            temp.push(arr[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i-low];
    }

    return arr;
}

console.log(MergeSort(arr,0,arr.length-1));