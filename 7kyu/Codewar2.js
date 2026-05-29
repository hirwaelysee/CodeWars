/*
Write a function which takes a number as input and returns the sum of the absolute 
value of each of the number's decimal digits.

For example: (Input --> Output)
    10 --> 1
    99 --> 18
    -32 --> 5
*/

function sumDigits(number) {
  number = Math.abs(number);
  number = Array.from(String(number),Number);
  return number.reduce((val,acc)=> val+acc,0);
}
console.log(sumDigits(-190));
