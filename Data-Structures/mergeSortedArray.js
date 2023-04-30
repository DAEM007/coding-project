// Problem 1: merge two sorted arrays into one sorted array
function mergeSort(arr1, arr2) {
    // check if one of the arrays are empty
    if(arr1.length === 0) {
        return arr2;
    }
    if(arr2.length === 0) {
        return arr1;
    }

   const sorted = [];
   let arr1curr = arr1[0];
   let arr2curr = arr2[0];
   let i = 1;
   let j = 1;
   while(arr1curr || arr2curr) {
    console.log(arr1curr, arr2curr);
    if(!arr2curr || arr1curr < arr2curr) {
        sorted.push(arr1curr);
        arr1curr = arr1[i];
        i++;
    } else {
        sorted.push(arr2curr);
        arr2curr = arr2[j];
        j++;
    }
   }

   return sorted;

}

const even = [2, 4, 4, 6, 8, 10];
const odd = [1, 3, 4, 5, 7];

console.log(mergeSort(even, odd));

