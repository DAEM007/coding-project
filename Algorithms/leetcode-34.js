// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Input: nums = [], target = 0
// Output: [-1,-1]

function searchRange(nums, target) {
    let output = new Array(2);
    output[0] = findFirst(nums, target);
    output[1] = findLast(nums, target);

    return output;

}

function findFirst(nums, t) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while(left <= right) {
        let middle = left + (right - left) / 2;
        if(t === nums[middle]) return middle;
        if(t <= nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return index;

}

function findLast(nums, t) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while(left <= right) {
        let middle = left + (right - left) / 2;
        if(t === nums[middle]) return middle;
        if(t >= nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return index;

}

console.log(searchRange([1,2,3,4,5,6,7,8,8,9,10], 8));