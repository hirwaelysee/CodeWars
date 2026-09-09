/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. 
For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

function expandedForm(num) {
  // Your code here
  let receiver = num.toString().split('');
  let handler = [];

  return receiver.map((item,index,arr)=>{
    if(item != '0'){
        let zeros = arr.length - 1 - index;
        let number = item + '0'.repeat(zeros);
        return [number];
    }
  }).filter((item)=> item != undefined).join(' + ')
}
console.log(expandedForm(70304));