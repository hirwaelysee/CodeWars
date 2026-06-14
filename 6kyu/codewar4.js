function minPermutation(n) {
    // 1. First convert the number to an array.
    // 2. Check the first element of the array if it stores a negative number and store it into a variable
    // 3. Sort the array
    // 4. Check whether the first index is zero and use findIndex 
    // to find the nearest value which is not negative and swap them
    // 5. Add the negative sign to the number and join them and convert them to a number
    
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
console.log(minPermutation(13));
