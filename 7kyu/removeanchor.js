/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
  let arr = url.split("");
  if(!arr.some((item)=> item == '#')) return arr.join('')
  
  let index = arr.findIndex((item)=> item == '#');
  return arr.slice(0,index).join("");
}