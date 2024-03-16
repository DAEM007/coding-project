// ============= PROBLEM SOLVING PATTERNS =================

// ==== Frequncy counter pattern =====

// challenge: write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
};

// OR if you don't want to use the index of method. You can say...
function same2(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let squaredNumber = arr1[i] ** 2;
        let correctIndex = -1;
        for (let j = 0; j < arr2.length; j++) {
            if(arr2[j] === squaredNumber) {
               correctIndex = j;
            }
        }
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
};

// solution at o(n^2) run-time...this is because indexOf is a loop nested in the for loop.
// console.log(same([1,2,3], [9,1,4])); 
// console.log(same2([1,2,3], [9,1,4])); // check solution for same2 again...