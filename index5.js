// problem 28: Now, compute a fibonacci sequence in an array and determine the Big-o of your algorithm
function fibonacci(n){
    let fib = [0, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

// console.log(fibonacci(5));
// note: since we have just one loop in the above algorithm, the big-o is o(n).

// problem 29: compute the factorial of an non-negative integer using a for loop;
function factorial(n){
    let result = 1;
    for(let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}

// console.log(factorial(5));
// note that the big-o of the above algorithm is o(n).

// problem 30: Determine if a number "n" is prime or not
function prime(n){
    
}

console.log(prime(5));