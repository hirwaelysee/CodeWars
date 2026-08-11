/*
 Create a function that applies multiple transformations to a string using callbacks.
*/
function transformString(text, callback) {
    // Your code here
    return callback(text);

}
function reverse(text){
    return text.split('').reverse().join('').toUpperCase();
}
console.log(transformString("hello world",reverse))

// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"