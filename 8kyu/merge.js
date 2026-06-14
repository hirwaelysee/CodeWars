/*
#### 2.Create a function that take 2 arrays and merge them

You are given:

const arr1= [1,2,3];
const arr2= [4,5,6];


Task:
Merge both arrays into a new array called merged.
Add 0 at the beginning of the array.
Add 7 at the end of the array.

Expected output:
[0, 1, 2, 3, 4, 5, 6, 7]
*/
function merge(arr1, arr2){
    let merger = [0,...arr1,...arr2,7];
    return merger;
}
console.log(merge([1,2,3],[4,5,6]));