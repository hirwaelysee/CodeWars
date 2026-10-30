/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
[1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
[9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
[0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
Invalid arrays

[] is invalid because it is empty
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer
*/

function upArray(arr){
   if(arr.length == 0 || arr.some(el => el<0) || arr.some(el => String(el).split('').length>1)) return null

   if(arr[0] == 0){
     let receiver = String(BigInt(arr.join(''))+1n).padStart(arr.length,'0').split('').map(Number)
     return receiver;
   }else{
      return String(BigInt(arr.join(''))+1n).split('').map(Number);
   }
}
console.log(upArray([0,3,4,9,6,9,3,7,2,5,1,2,4,1,9,4,3,5,9,7,0,3,2,9,4,6,7,3,9,5,1]))
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]));
console.log(upArray([1,2,33]));
console.log(upArray([0,1,3,7]));
console.log(upArray([1,2,33]));
console.log(upArray([9,9,9,9]));
console.log(upArray([1,2,3,9]));
console.log(upArray([4,3,2,5]));
console.log(upArray([-3,3]));