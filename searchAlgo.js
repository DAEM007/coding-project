// Linear search
function linearSearch(arr, t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === t){
            return i
        }
    }
    return -1;
}

// console.log(linearSearch([1,2,3,4,5,6,7,8], 5));
// Note that the big - o of the algorithm is o(n). Since as the input grows we keep iterating...also because we have just one loop...

// Binary search
// One important thing to note here is that binary search only works on a SORTED! array.
// Hence we can either choose to use a linear search or sort the list and use a binary search.
// Now using the same example as above since it's sorted...
// The psuedo code would then be that...
// 1. We check if the array is empty and return -1.
// 2. We then define the left and right part of the array
// 3. We also define the middle index of the array 
// 4. check if the target is greater/less than the middle index, we redefine the left and right for the binary search.
// 5. If the target is equals to the middle index, we return the index otherwise we return -1.
function BinarySearch(arr, t){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if(t === arr[middle]) {
            return middle;
        }
        if(t > arr[middle]) {
            left = middle + 1;
        }else {
            right = middle - 1;
        }
    }

    return -1;

}

// console.log(BinarySearch([1,2,3,4,5,6,7,8], 5));
// Note: The big - o for this algorithm is actually o(logn) as opposed to o(n)...This is because as the input grows, the input always reduced by half...

// Recursive Binary search
// Now let's solve the same problem with recursion
function RecursiveBS(arr, t) {
    return HelperSearch(arr, t, 0, arr.length - 1)
}

function HelperSearch(arr, t, left, right) {
    if(left > right) {
        return -1;
    }
    let middle = Math.floor((left + right) / 2);
    if(t === arr[middle]) {
        return middle;
    }
    if(t < arr[middle]) {
        return HelperSearch(arr, t, left, middle - 1);
    }else {
        return HelperSearch(arr, t, middle + 1, right)
    }
}


// console.log(RecursiveBS([1,2,3,4,5,6,7,8], 5));
// Note: Here that the big -o of this algorithm is also o(logn) since as the input grows it reduces by half.