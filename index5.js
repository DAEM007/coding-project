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
    if(n < 2){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

// console.log(prime(19));
// note: that the time complexity for the above algorithm is o(n).

// problem 31: Resolve Power of two from index4.js without recursion
function powerTwo(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n / 2;
    }
    return true;
}

// console.log(powerTwo(8));
// Note: You might want to think that the big - o of the algorithm above is o(n) but notice what is happening to the input of the algorithm in the loop...we see here that the input is reduced by half hence making the big-o of the algorithm to be o(logn).

// solving the above in constant time using the bitwise operator
function powerTwoBitwise(n){
    if(n < 1){
        return false;
    }else{
        return (n & (n - 1)) === 0;
    }
}

// console.log(powerTwoBitwise(8));

// Review of the fibonacci sequence with the big o
function fib(n){
    if(n < 2){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6));
// Note here that as the value of the input grow the time complexity increases by 2^n...so the big o of the recursive solution above is o(2^n) and it's important to note that this is far worse than the iterarive solution which is o(n)...