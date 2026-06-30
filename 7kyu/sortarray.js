/*
Write a function that takes an array of strings as an argument and returns a sorted array containing
the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to
decide how to order multiple strings of the same length.
*/

function sortByLength (array) {
    return array.sort((a,b)=>a.length-b.length);
    // let output= [];

    // for(let i=0; i<rec1.length;i++){
    //     for(j=0; j<array.length;j++){
    //         if(rec1[i] === array[j].length){
    //             output.push(array[j]);
    //         }
    //     }
    // }
    // return output;
}
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));