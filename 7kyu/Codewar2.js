function sumDigits(number) {
  number = Math.abs(number);
  number = Array.from(String(number),Number);
  return number.reduce((val,acc)=> val+acc,0);
}
console.log(sumDigits(-190));
