/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
Note: Zero should be left as it is.
*/
function noBoringZeros(n) {
  // your code
    n = n.toString().split('');
    while(n[n.length-1] == '0'){
        n.pop();
    }
    return Number(n.join(''));
}