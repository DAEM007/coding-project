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

const array = [-6, -2, -4, 5, 7, 3, 10, 9, 8];
BubbleSort(array);
console.log(array);