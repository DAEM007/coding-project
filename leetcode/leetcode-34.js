// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Input: nums = [], target = 0
// Output: [-1,-1]

//solution 1: more-optimized
function searchRange(nums, target) {
    let left = 0; let right = nums.length - 1;
    let leftIndex = -1; let rightIndex = -1;
    while(left <= right) {
        const middle =  Math.floor((left + right) / 2);
        if(target <= nums[middle]) right = middle - 1;
        else left = middle + 1; 
    }
    leftIndex = left;
    left = 0; right = nums.length - 1;
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        if(target < nums[middle]) right = middle - 1;
        else left = middle + 1;
    }
    rightIndex = right;
    return leftIndex <= rightIndex ? [leftIndex, rightIndex] : [-1, -1];
}


// solution 2: less-optimized
// function searchRange(nums, target) {
//     left = 0; right= nums.length; 
//     leftIndex = -1; rightIndex = -1;
//     while(left <= right) {
//         const middle = Math.floor((left + right) / 2);
//         if(target <= nums[middle]) right = middle - 1;
//         else left = middle + 1;
//     }

//     leftIndex = left;
//     left = 0; right = nums.length;

//     while(left <= right) {
//         const middle = Math.floor((left + right) / 2);
//         if(target < nums[middle]) right = middle - 1;
//         else left = middle + 1; 
//     }

//     rightIndex = right;

//     return leftIndex <= rightIndex ? [leftIndex, rightIndex] : [-1, -1];

// }

console.log(searchRange([5,7,7,8,8,10], 8));



