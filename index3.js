// challenge 16: Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// example: 
// let nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }
// contains(nestedObject, 44) //true
// contains(nestedObject, 'foo') //false

function contains(nested, value){
    for(let key in nested){
        if(typeof nested[key] === 'object'){
            return contains(nested[key], value);
        }else if(nested[key] === value){
            return true;
        }else{
            return false;
        }
    }
}

// console.log(contains({
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }, 44));

// challenge 17: Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(base, exp){
    if(exp === 0){
        return 1;
    }else{
        return base * power(base, exp - 1);
    }
}

// console.log(power(2, 4));

// challenge 18: Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
function all(arr, callback){
    if(arr.length === 0){
        return true;
    }
    if(callback(arr[0]) === true){
        arr.shift();
        return all(arr, callback);
    }else{
        return false;
    }
}

// console.log(all([1,2,3,4,5], (num) => {
//     return num < 6;
// }));

// challenge 19: Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr) {
    if(arr.length === 0){
        return 1;
    }else{
        return arr.shift() * productOfArray(arr);
    }
}

// console.log(productOfArray([1,2,3]));
