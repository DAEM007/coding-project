// Cartesian product problem: Given two finite non-empty sets, find their cartesian product.
function cartesianProduct(arr1, arr2) {
    let cart = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++) {
            cart.push([arr1[i], arr2[j]]);
        }
    }
    return cart;
}

// console.log(cartesianProduct([1,2], [3,4,5]));
// Note: That you might be tempted to think that the big-o of the above solution is o(n^2)...but note that the inputs of both arrays might not be the same...Hence, the big-o of the above solution is o(mn). Since both inputs in the array are independent of each other.

// Climbing Staircase problem: Given a staircase of 'n' steps, count the number of ways to climb to the top. You can either climb one(1) step or two(2) steps at a time.
function climb(n) {
    if(n < 2) {
        return 1;
    }
    return climb(n-1) + climb(n-2);
}

// console.log(climb(4));
// Note: That big-o = o(n).

// Alternatively, we can use the for loop and then we would have
function climb(n) {
    let ways = [1, 2];
    for(let i = 2; i < n; i++) {
        ways[i] = ways[i-1] + ways[i-2];
    }
    return ways;
}

// console.log(climb(5));
// Note: That big-o = o(n).

