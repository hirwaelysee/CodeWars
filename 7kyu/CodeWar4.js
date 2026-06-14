/*
Given a string, return the number of lonely letters it contains.

A letter is lonely when:

It appears exactly once in the whole string.
Its alphabetical neighbors are both absent from the string.
Alphabetical neighbors are the previous and next letters in the alphabet.

d has alphabetical neighbors c and e.
a has only one possible neighbor: b.
z has only one possible neighbor: y.
The alphabet is not cyclic, so z is not a neighbor of a, and a is not a neighbor of z.
For example:

d is not lonely if c or e also appears somewhere in the text.
m is lonely if m appears once and both l and n are absent.
Rules
Ignore letter case.
Ignore all non-letter characters.
Work only with English letters a-z.
Examples
Input: "ad" -> Output: 2
Input: "abc" -> Output: 0
Input: "Hello, World!" -> Output: 3
Input: "A-dA" -> Output: 1
Input: "zz" -> Output: 0

*/
function countLonelyLetters(text) {
  // your code here
  let receiver = text.toLowerCase().replace(/[^a-z]/g,"").split('');
  let output = 0;
  // iterates over the array to count the appearance of the letter in the string.
  for (let i=0; i<receiver.length; i++){
    let count = 0;
    for (let j=0; j<receiver.length; j++){
      if (receiver[i] === receiver[j]){
        count++;
      }
    }
    if(count === 1){
      let prev = String.fromCharCode(receiver[i].charCodeAt(0) - 1);
      let next = String.fromCharCode(receiver[i].charCodeAt(0) + 1);
        if(!receiver.includes(prev) && !receiver.includes(next)){
          output += 1; 
        } 
    }
  }
    return output;
}

console.log(countLonelyLetters("Hello, World!"));