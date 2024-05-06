//5.Write a JavaScript program to sort a list of elements using Heap sort. 
const arr = [6,3,5,1,2,4];
var N = arr.length;

function heapSort( arr)
{
    var N = arr.length;

    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    for (var i = N - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, N, i)
{
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, N, largest);
    }
}

console.log(heapSort(arr));

