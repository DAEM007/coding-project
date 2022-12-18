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