/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts a non-negative integer and returns an integer.

We now interrupt your regularly scheduled programming
Given the result, return the number!

if there is more than one possibility, return the smallest
if there are no possibilities, return Nothing or a similar empty value
*/
function unsquareDigits(n) {
    let receiver = [];
    n = n.toString().split('').map(Number).reverse();

    for(let i=0; i<n.length; i+=2){
            receiver.push([n[i+1],n[i]]);
    }

    let holder= receiver.map((item)=> {
        return Number(item.filter((it)=> it != undefined).join(''))
    }).reverse().map(item => {
        if(item == 11){
            return item
        }else{
            return Math.sqrt(item);
        }
    }).join('');

    return holder %1 == 0? BigInt(holder): null;
    
}
console.log(unsquareDigits(9119));