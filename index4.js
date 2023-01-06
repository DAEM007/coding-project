// challenge 23: Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
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