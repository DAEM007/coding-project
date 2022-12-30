// challenge 9: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(list){
    let filter = [];
    for(let i = 0; i < list.length; i++){
        if(typeof list[i] != "string"){
            filter.push(list[i]);
        }
    }
    return filter;
}

// console.log(filter_list([1,2,'aasf','1','123',123]));

// challenge 10: Write a function that converts a list to an array
// Example: 
// Input: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// output: [1, 2, 3]

function listToArray(list){
    let arr = [];
    console.log(list);
}

// console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}}));


// challenge 10: You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

function stray(numbers){
    let stray = numbers[0];
    if(stray !== numbers[1] && stray !== numbers[2]){
     return stray;
    }
    for(let i = 1; i < numbers.length; i++){
     if(stray !== numbers[i]){
         return numbers[i];
     }
    }
 }
 
//  console.log(stray([1, 1, 1, 5, 1, 1]));

// challenge 11: first recursive function --count up
function countUp(num){
    if(num >= 5){
        console.log(`counted all numbers up till ${num-1}`);
        return num;
    }
    console.log(num);
    num++;
    countUp(num);
}

// console.log(countUp(1));


// challenge 12: second recursive function --count down
 function countDown(num){
    if(num <= 0){
        console.log(`counted all numbers down till ${num+1}`);
        return num;
    }
    console.log(num);
    num--;
    countDown(num);
 }

//  console.log(countDown(10));

// challenge 12: third recursive function --sum numbers within a range
function sumRange(num){
    if(num === 1){
        return 1;
    }else{
        return num + sumRange(num-1);
    }
}

// console.log(sumRange(7));

// --------------OR--------------

// note: that the refactor/clean up of the above function goes thus...
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

// console.log(sumRange(7));

// challenge 13: fourth recursive function --factorial of a number
function factorial(num){
    if(num === 1){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

// console.log(factorial(5));

// challenge 14: fifth recursive function --get the odd numbers from the given array
function collectOddNumbers(arr){
    let oddNumbers = [];
    
    function helper(helperInput){
        if(helperInput.length === 0){
            return helperInput.length;
        }
        if(helperInput[0] % 2 != 0){
            oddNumbers.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(arr);
    return oddNumbers;

}

// console.log(collectOddNumbers([1,2,3,4,5,6,7,8,9,10]));

// challenge 15: sixth recursive function --collect the even number from the given array
function collectEvenNumbers(arr){
    let evenNumbers = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 === 0){
            evenNumbers.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(arr)
    return evenNumbers;
}

// console.log(collectEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

// solve tons of questions on recursion...
