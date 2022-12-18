// challenge 1: function to return the sum of two numbers
function sum(num1, num2){
    const sum = num1 + num2;
    return sum;
}

// console.log(sum(5,4));


//challenge 2: function that takes in a string and returns the counts of each character
function charCount(str){
    let splitStr = str.toLowerCase().split('');
    
    let result = splitStr.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 

    return result;
}


// console.log(charCount('OLUWADAMILOLA'));

//challenge 3: function that takes in a nested array and an element and returns a filtered nested array that does not contain the element
function filteredArray(array, elem){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        if(!array[i].includes(elem)){
            newArray.push(array[i])
        }
    }

    return newArray;
}

// console.log(filteredArray([[3, 4, 5, 6], [16, 10, 7, 9], [1, 2, 5, 8]], 5));

//challenge 4: You are given a digit to return the reverse of the number...write a function to perform the task
function reverse(num){
    // convert number to an array
   const split = String(n).split('');
    // reverse the string
   const rev = split.reverse();
    // create a string called num to put each item in the array
//    let num = '';
    // using a for loop to iterate over each member or item
   for(let i = 0; i < rev.length; i++){
    num += rev[i];
   }
    // update the number
   let actualNum = parseInt(num);
    // return the number
   return actualNum;
}

// console.log(reverse(12345));

// challenge 5: Define a method/function that removes from a given array of integers all the values contained in a second array.
function remove(int_list, val_list){
    let filteredNum = [];    
        for(let i = 0; i < int_list.length; i++){
            if(!val_list.includes(int_list[i])){
            filteredNum.push(int_list[i])   
        }
    }
    return filteredNum;
}

// console.log(remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]));

// challenge 6:  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(num){
    const split = String(num).split('');
    const descArr = split.sort((a, b) => {
        return b - a;
    })
    let numStr = '';
    for(let i = 0; i < descArr.length; i++){
        numStr += parseInt(descArr[i]);
    }
    const result = parseInt(numStr);
    return result;
}

// console.log(descendingOrder(17293645));

// challenge 7: Write a function to reverse a number maintaining the sign in front of the number.
function reverse(n){
    const split = String(n).split('');
    let rev = split.reverse();
    let numStr = '';
    let negStr = ''
    if(rev.includes('-')){
       numStr += rev.pop();
       rev.unshift(numStr);
    }
    for(let i = 0; i < rev.length; i++){
        negStr += rev[i];
    }
    const result = parseInt(negStr);
    return result;
}

// console.log(reverse(-142537598));

// challenge 8: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
function getSum( a, b ){
    let sum = 0;
    if(a === b){
        return a || b;
    }
    while(a > b){
        sum += a;
        a--;
    }
    while(a < b+1){
        sum += a;
        a++;
    }
    return sum;
}

// console.log(getSum(7, 1));



