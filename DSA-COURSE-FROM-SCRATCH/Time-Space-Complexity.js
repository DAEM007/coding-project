// =============== DSA-COURSE-FROM-SCRATCH  ===================

// ============== Time-complexity =============================

// challenge: Given a number n, write a function that takes in n as an input and prints the pairs of number from (0,0) up until (n,n).
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`(${i},${j})`);
        }
    }
}

// run-time of o(n^2)
// console.log(printAllPairs(6));

// challenge: Print at least 5
function logAtLeast(n) {
    for (let i = 0; i < Math.max(5, n); i++) {
        console.log(i);
    }
}

// run-time of o(n)
// console.log(logAtLeast(10)); 

// challenge: Print at most 5
function logAtMost(n) {
    for (let i = 0; i < Math.min(5, n); i++) {
        console.log(i);
    }
}

// run-time of o(1)
// console.log(logAtMost(10000));