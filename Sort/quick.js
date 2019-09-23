swap = (arr, i, j ) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

quickSortAdvance = (arr, left, right) =>{
    left = left || 0; 
    right = right || arr.length - 1;

    let pivot = partition(arr, left, right);

    if ( left < pivot - 1 ){
        quickSortAdvance(arr, left, pivot -1 );
    }
    if (right > pivot) {
        quickSortAdvance(arr, pivot, right)
    }
    return arr;
}

partition = (arr, left , right) => {
    let pivot = Math.floor((left + right) / 2);

    while(left < right) {
        while (arr[left] < arr[pivot]){
            left++
        }
        while (arr[right] > arr[pivot]) {
            right --
        }
        if(left <= right) {
            swap(arr, left, right);
            left ++
            right --
        }
    }
    return left; 
}

let arr = [ 2,5,3,4,1]

console.log(quickSortAdvance(arr, 0, arr.length - 1))


quickSort = (array) => {
    if (array.length < 2) return array;

    let pivot = array[0]
    let lesserArray = []
    let greaterArray = []

    for (let i = 1; i < array.length; i++) {
        if( array [i] > pivot) {
            greaterArray.push(array[i])
        }else{
            lesserArray.push(array[i])
        }
    }
    return quickSort(lesserArray).concat(pivot, quickSort(greaterArray))
}

// console.log(quickSort(arr, 0, arr.length - 1))