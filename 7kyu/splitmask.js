/*
Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

Examples:
|     xs        |  Mask (lengths) |          Output           |
|---------------|-----------------|---------------------------|
|  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
|  "codewars"   |  [4, 4]         |  ["code", "wars"]         |
Notes:
The mask only contains strictly positive integers.
A mask is valid if and only if the sum of the lengths is equal to the length of the string.
Otherwise, return None.

*/
// function split(string,mask) {
//    const sum = mask.reduce((sum,value)=> sum+value,0)
//    if(string.length != sum){
//         return `null`
//    }

//    let receiver = [];
//    let position = 0;
//    for(let item=0; item<mask.length; item++){
//       let end = position + mask[item];
//       receiver.push(string.slice(position, end));
//       position = end;
//    }

//    return receiver
// }

function split(string,mask){
    let receiver = [];
    let count = 0;

    for (let item of mask){
        receiver.push(string.slice(count, count+item))
        count += item
    }
    return count != string.length? null: receiver;
}
console.log(split("1234567890",[3,3,4]));
