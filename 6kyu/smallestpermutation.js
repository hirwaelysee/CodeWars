/*
Given a number, find the permutation with the smallest absolute value (no leading zeros).

-20 => -20
-32 => -23
0 => 0
10 => 10
29394 => 23499
The input will always be an integer.
*/
function minPermutation(n) {
    // 1. Use the array.from to change the number to an array.
    // 2. Store the negative sign into a variable and prepend it back if the number was negative.
    // 3. Then sort the array and make sure there is no zero in the starting of the number after being sorted
    // if change the position the zero to second position.
    // 4. Join the number and prepend the negative sign back to the number.
    
    n = n.toString().split('');
    let sign = '';
    
    if(n[0] === '-'){
        sign = n.shift();
    }
    
    n = n.map(Number).sort((a,b)=> a-b);
    
    if(n[0] === 0){
        let index = n.findIndex(num=>num !== 0);

        let swap = n[0];
        n[0] = n[index];
        n[index] = swap;
    }
    if(sign === '-'){
        n.unshift('-');
    }
    return Number(n.join(""));
    
}