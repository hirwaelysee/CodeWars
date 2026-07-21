/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/
function incrementString (strng) {
    strng = strng.split('');
    
    if(isNaN(strng[strng.length-1])) {
        strng.push('1');
        return strng.join('')
    }
    

    if(!isNaN(strng[strng.length-1])){
        let index = strng.findLastIndex((item)=> isNaN(item));
        let charPart = strng.slice(0,index+1).join('');
        let NumberPart = strng.slice(index+1).join('');
        let NumberPartIncremented = String(Number(NumberPart)+1);
        return charPart+NumberPartIncremented.padStart(NumberPart.length,'0');
    }
}
console.log(incrementString('fo99obar000'));