/*
Task
Given an array of numbers and an index, return either the index of the smallest number that is 
larger than the element at the given index, or -1 if there is no such index ( or, where applicable,
Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

*/
// 1. Try to sort the array and store it in another variable.
    // 2. find the element given at the index and store it in a variable
    // 3. try to find the element given at the specific index and move around in the new sorted array.
    // the sorted array and find whether there's a greater element.
   //4. if it returns undefined then let it store -1 and should be returned.
   //5. if the value is there move over the array given before and return it's index.
  function leastLarger(a,i) {
   let sortedArray = a.toSorted((a,b)=> a-b);
   let element = a[i];
   let greaterElement = sortedArray.find((item)=> item > element);
   if(greaterElement === 'undefined'){
      return -1;
   }else{
      return a.findIndex((index)=> index === greaterElement)
   }
   return a.findIndex((index)=> index === greaterElement)
}
console.log(leastLarger([1, 3, 5, 2, 4], 0));