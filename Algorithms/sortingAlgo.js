// Bubble sort- Note this the poorest of all the sorting algorithms but it give a very good intro to sorting alogorithms
// Example 1: Given an array return the sorted array in ascending order
function BubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// BubbleSort(array);
// console.log(array);
// Note: Here that the big - o of the algorithm is o(n^2) since there are two nested loops...notice that this is a poor algorithm just as we have established...
// Example 2: Given an array return the sorted array in descending order
function BubbleSortDesc(arr) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] < arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// BubbleSortDesc(array);
// console.log(array);

// Insertion sort
// Example 3: Solve Example 1 using insertion sort algorithm
function InsertionSort(arr) {
    // since we assume that first element in the array is sorted
    // Hence, we traverse the unsorted part
    // Note we use i for sorted index and j for unsorted index
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// InsertionSort(array);
// console.log(array);
// Note: Big-o = o(n^2)...since as the inputs(number of elements in the array)increases, the number of comparisms increases by square of that number...also recall we have two nested loops

// Example 4: Implement insertion sort in descending order for Example 3
function InsertionSortDesc(arr) {
    // since we assume that the first element in the array is sorted
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] < numberToInsert) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// InsertionSortDesc(array);
// console.log(array);
// Note: The big-o = o(n^2)...since as the input grows the number of comparism increases by square of the input...recall that we have two nested loops

// Quick sort
// Example 5: Implement a quick sort in ascending order for Example 3
function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// console.log(quickSort(array));

// Note: big-o(worst case) = o(n^2);
// avg case = o(nlogn);

// Example 6: Implement quick sort for Eample 3 in descending order
function quickSortDesc(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortDesc(left), pivot, ...quickSortDesc(right)];
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// console.log(quickSortDesc(array));
// Note: big-o(worst case) = o(n^2);
// avg case = o(nlogn);

// Merge Sort
// Example 7: Implement merge sort for Example 3 in ascending order
function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let sorted = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// console.log(mergeSort(array));
// Note: big- o = o(nlogn) since for the first part of the algorithm we see that we have a logn complexity since we are dividing the input by half as the input grows... while in the second part of the algorithm we see that we have a n complexity owing to the single loop.

// Example 8: Implement merge sort for Example 3 in descending order
function mergeSortDesc(arr) {
    if(arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let sorted = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(right.shift());
        } else {
            sorted.push(left.shift());
        }
    }
    return [...sorted, ...left, ...right];
}


// const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
// console.log(mergeSortDesc(array));
//Note: Note: big- o = o(nlogn) since for the first part of the algorithm we see that we have a logn complexity since we are dividing the input by half as the input grows... while in the second part of the algorithm we see that we have a n complexity owing to the single loop. 

