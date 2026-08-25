/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'.
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' 
letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

Words will be separated by exactly one space and there will be no leading or trailing spaces.


*/
function insideOut(x){
  x = x.split(' ');
  
  for(let [index,item] of x.entries()){
    const receiver = item.split('');
    
    if(receiver.length % 2 != 0){
        let firstPart = receiver.slice(0, receiver.length/2);
        let secondPart = receiver.slice(receiver.length/2+1);
        return secondPart
    }

  }
}
console.log(insideOut("man i need a taxi up to ubud"))