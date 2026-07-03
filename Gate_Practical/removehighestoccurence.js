/*
Write a function removeHighestOccurrence that takes an array of elements as an argument and 
returns a new array with the highest occurring element removed. 

removeHighestOccurrence([1, 2, 2, 3, 4, 4, 5]) // [1, 3, 5]

removeHighestOccurrence(['a', 'b', 'b', 'c', 'c', 'c', 'd']) // ['a', 'b', 'b', 'd']

removeHighestOccurrence([true, true, false, false, true]) // [false, false]
*/
function removeHighestOccurrence(arr){
    const obj = {}
    for(let i=0; i<arr.length; i++){
        let count =0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        obj[arr[i]] = count;
    }
    
    let highestValue= -Infinity;
    for (const key in obj){
        if(obj[key] > highestValue){
            highestValue = obj[key];
        }
    }
    return arr.filter((item)=> obj[item] !== highestValue);

}
console.log(removeHighestOccurrence([1, 2, 2, 3, 4, 4, 5]))
//Not yet finished still finding it out.