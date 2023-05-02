
// Given an array, return the first recurring character.
// input => ouput
// [2, 4, 5, 1, 2, 5, 3, 7] => 2
// [2, 1, 1, 3, 2, 5, 3, 7] => 1
// [2, 4, 1, 7] => undefined

// solution using hashmaps with a run-time of o(n)
function firstRecurring(arr) {
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]] != undefined) {
            // console.log(map);
            return arr[i];
        } else {
            map[arr[i]] = i;
        }
    }
    return undefined;
}

console.log(firstRecurring([2, 4, 5, 1, 2, 5, 3, 7]));

// solution using a for loop with a run-time of o(n^2)
function firstRecurring1(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

// console.log(firstRecurring1([2, 1, 1, 3, 2, 5, 3, 7]));

// challenge: Try to take care of the scenerio in o(n^2) algorithm
