/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"


*/
function encryptThis(text) {
  text = text.split(' ');
  
  for(let i=0; i<text.length;i++){
     let char = text[i].split('');
     let asci = text[i].charCodeAt(0);
     
     if(char.length > 2){
        [char[1], char[char.length-1]]=[char[char.length-1], char[1]]
     }
     text[i] = asci+char.splice(1).join('');
  }
  return text.join(' ');
}