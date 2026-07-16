/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/
// Not working
// function domainName(url){
//   if(url.includes('w')){
//     let points = url.split('').reduce((acc,val,i)=> val === '.' ? [...acc,i] : acc, []);
//     return url.split('').slice(points[0]+1, points[1]).join('');
//   }else if(url.includes('/')){
//       let first = (url.split('').findIndex((item)=> item == '/'))+2;
//       let last = url.split('').findIndex((item)=> item == '.');
//       return url.split('').slice(first,last).join('');
//   }
// }
function domainName(url){
    url = url.replace("https://", "");
    url = url.replace("http://", "");
    url = url.replace("www.", "");
    return url.split('.')[0];
}
