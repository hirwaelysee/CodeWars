/*
You will be given a list of strings. You must sort it alphabetically 
(case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/
function twoSort(s) {
  //1. sort the list of strings.
  //2. split the strings.
  //3. add *** between each letter.
  return s.sort()[0].split("").join("***");

}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))