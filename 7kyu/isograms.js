/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
function isIsogram(str){
  //...
  str = str.toLowerCase();
  let letter = new Set(str);
  return str.length === letter.size;
}
//or
function isIsogram(str){
  str = str.toLowerCase().split('');
  let receiver = new Set(str);
  return Array.from(receiver).join('') === str.join('') ;
}