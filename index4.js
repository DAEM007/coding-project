// challenge 23: Implement pow(x, n), which calculates x raised to the power n (i.e., xn)...leetcode problem: 50
function myPow(x, n){
    
    function Pow(base, exp) {
        if(exp % 2 === 0){
            return base ** (Math.floor(exp / 2)) * base ** (Math.floor(exp / 2));
        }else{
            return base * base ** (Math.floor(exp / 2)) * base ** (Math.floor(exp / 2));
        }
    }
    
    if(n === 0){
        return 1;
    }else if(n === 1){
        return x;
    }else if(n > 0){
        return Pow(x, n);
    }else if(n < 0){
        return 1 / x ** (-n);
    }
}

// console.log(myPow(2, 6));

// challenge 24 : Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2 ** x...problem: 231
function isPowerOfTwo(n){
    if(n === 1){
        return true;
    }else if(n && n % 2 === 0){
        return isPowerOfTwo(n / 2);
    }else{
        return false;
    }
}

// console.log(isPowerOfTwo(3));

// challenge 25 : leetcode problem 326: powers of three
function isPowerOfThree(n) {
    if(n === 1){
        return true;
    }else if(n && n % 2 !== 0){
        return isPowerOfThree(n / 3);
    }else{
        return false;
    }
}

// console.log(isPowerOfThree(27));

// challenge 26 : leetcode problem 342 : powers of four
function isPowerOfFour(n) {
    if(n === 1){
        return true;
    }else if(n && n % 2 === 0){
        return isPowerOfFour(n / 4);
    }else{
        return false;
    }
}

// console.log(isPowerOfFour(64));