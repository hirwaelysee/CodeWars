/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  str = str.split('');
  return str.map((it,index,arr)=>{
      return it.repeat(2);
  }).join('')
}
console.log(doubleChar("String"))