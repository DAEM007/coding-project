//  Note: You always want to think of a string problem in terms of arrays

// problem 1: write a function that reverses a string

// implementation with for loop
function reverseString(str) {
   if(!str || str.length < 2) {
      return str;
   }
   const backwards = [];
   for(let i = str.length; i >= 0; i--) {
      backwards.push(str[i]);
   }

   return backwards.join('');

}

// implementation with while loop
function reverseWhile(str) {
   if(!str || str.length < 2) {
      return str;
   }
   let index = str.length;
   const backwards = [];
   while(index >= 0) {
      backwards.push(str[index]);
      index--;
   }

   return backwards.join('');

}

// implementation with in-built js functions
function reverse(str) {

   return !str || str.length < 2 ? str : str.split('').reverse().join('');

}

const sentence = 'My name is Emmanuel';
// console.log(reverseString(sentence));
console.log(reverseWhile(sentence));
// console.log(reverse(sentence));



