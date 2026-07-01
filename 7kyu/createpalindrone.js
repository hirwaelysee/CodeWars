/*
Consider the string "adfa" and the following rules:

a) each character MUST be changed either to the one before or the one after in alphabet. 
b) "a" can only be changed to "b" and "z" to "y". 
From our string, we get:

"adfa" -> ["begb","beeb","bcgb","bceb"]

Here is another example: 
"bd" -> ["ae","ac","ce","cc"]

--We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
You will be given a lowercase string and your task is to return True if at least one of the
outcomes is a palindrome or False otherwise.

More examples in test cases. Good luck!
*/
function solve(s){
    s = s.toLowerCase().split("");
    let receiver  = [];
    for(let i=0; i<s.length; i++){
        if(String.fromCharCode(s[i].charCodeAt(0) == 97)){
            s[i]= String.fromCharCode(s[i].charCodeAt(0)+1)    
        }
        else if(String.fromCharCode(s[i].charCodeAt(0) == 122)){
            s[i]= String.fromCharCode(s[i].charCodeAt(0)-1)
        }else{
            s[i] = String.fromCharCode(s[i].charCodeAt(0)+1);
        }
        receiver.push(s[i]);
    }
    return receiver.join("");
}
console.log(solve("adfa"));
//Unfinished.