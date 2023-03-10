function linearSearch(arr, t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === t){
            return i
        }
    }
    return -1;
}

// console.log(linearSearch([1,2,3,4,5,6,7,8], 5));
// Note that the big - o of the algorithm is o(n). Since as the input grows we keep iterating...also because we have just one loop...

