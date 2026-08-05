/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. 
string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/
// function findUniq(arr) {
//   let receiver1 = [];
  
//   for(let i=0; i<arr.length; i++){
//     let one = arr[i].toLowerCase().split('').sort();
//     let receiver2 = new Set(one);
//     receiver1.push([...receiver2].join(''));
//   }
  
//   // for(let i=0; i<receiver1.length; i++){
//   //   for(let j=0; j<receiver1.length; j++){
//   //       if(receiver1[i] !== receiver1[j]){
//   //           return arr.find(item=>{
//   //               const proceed = [...new Set(item.toLowerCase().split('').sort())].join('');
//   //               return proceed === receiver1[j];
//   //           })
//   //       } 
//   //   }
//   // }

//   for(let i=0; i<receiver1.length; i++){
//     if(receiver1.indexOf(receiver1[i]) === receiver1.lastIndexOf(receiver1[i])){
//       return arr[i];
//     }
//   }
  
// }

function findUniq(arr){
    //sorts every single item in the array and removes duplicates.
    const receiver1 = arr.map(item =>{
      return [...new Set(item.toLowerCase().split('').sort())].join('');
    })
    //iterates over the array to find the unique 
    for(let i=0; i<receiver1.length; i++){
      if(receiver1.indexOf(receiver1[i]) === receiver1.lastIndexOf(receiver1[i])){
        return arr[i];
      }
    }
}

console.log(findUniq(['silvia', 'vasili', 'victor']));
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) )
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']));
console.log(findUniq([ '    ', 'a', ' ' ]))
console.log(findUniq(["op", "op", "op", "p"]))
console.log(findUniq(["p", "op", "op", "op"]))
