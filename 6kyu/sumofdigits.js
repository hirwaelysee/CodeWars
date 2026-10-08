/*
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this
way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->
*/
function digitalRoot(n) {
  let receiver = String(n).split('').map(Number);
  let size = receiver.length;
  
  while(size != 1){
    let sum = receiver.reduce((sum, val)=> sum+val);
    receiver = String(sum).split('').map(Number);
    size = receiver.length;
  }
  return receiver[0];
}
console.log(digitalRoot(16))//7
console.log(digitalRoot(942))//6
console.log(digitalRoot(132189))//6
console.log(digitalRoot(493193))//2