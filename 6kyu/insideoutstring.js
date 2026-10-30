/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'.
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' 
letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

Words will be separated by exactly one space and there will be no leading or trailing spaces.


*/
// function insideOut(x){
//   x = x.split(' ');
//   let handler = []
  
//   for(let [index,item] of x.entries()){
//     let receiver = item.split('');
    
//     if(receiver.length % 2 != 0){
//         let middle = receiver[Math.floor(receiver.length/2)];

//         let firstPart = receiver.slice(0, Math.floor(receiver.length/2))

//         firstPart.forEach((el,index,arr)=> {
//           if(index < Math.floor(firstPart.length/2)){
//             let swap = arr[index];
//             arr[index] = arr[(arr.length-1)-index];
//             arr[(firstPart.length-1)-index] = swap;
//           }
//         });

//         let secondPart = receiver.slice( Math.floor(receiver.length/2)+1);
        
//         secondPart.forEach((el,index,arr)=> {
//           if(index < Math.floor(secondPart.length/2)){
//             let swap = arr[index];
//             arr[index] = arr[(arr.length-1)-index];
//             arr[(secondPart.length-1)-index] = swap;
//           }
//         });

//         receiver = [...firstPart,middle,...secondPart].join('');
//         handler.push(receiver)
//     }
//     else{
//         let firstPart = receiver.slice(0, receiver.length/2);

//         firstPart.forEach((item,index,arr)=>{
//           if(index < Math.floor(firstPart.length/2)){
//             let swap = arr[index];
//             arr[index] = arr[(arr.length-1) - index];
//             arr[(arr.length-1) - index] = swap
//           }
//         })
//         let secondPart = receiver.slice(receiver.length/2)

//         secondPart.forEach((item,index,arr)=>{
//           if(index < Math.floor(firstPart.length/2)){
//             let swap = arr[index];
//             arr[index] = arr[(arr.length-1) - index];
//             arr[(arr.length-1) - index] = swap
//           }
//         })
        
//         receiver = [...firstPart,...secondPart].join('')
//         handler.push(receiver)
//     }
//   }
//   return handler.join(' ')
// }
function insideOut(x){

  return x.split(' ').map((item)=>{

      let receiver = item.split('');
    
      if(receiver.length % 2 != 0){
        let middle = receiver[Math.floor(receiver.length/2)];

        let firstPart = receiver.slice(0, Math.floor(receiver.length/2))

        firstPart.forEach((_,index,arr)=> {
          if(index < Math.floor(firstPart.length/2)){
            let swap = arr[index];
            arr[index] = arr[(arr.length-1)-index];
            arr[(firstPart.length-1)-index] = swap;
          }
        });

        let secondPart = receiver.slice( Math.floor(receiver.length/2)+1);
        
        secondPart.forEach((_,index,arr)=> {
          if(index < Math.floor(secondPart.length/2)){
            let swap = arr[index];
            arr[index] = arr[(arr.length-1)-index];
            arr[(secondPart.length-1)-index] = swap;
          }
        });

        return [...firstPart,middle,...secondPart].join('');
    }
    else{
        let firstPart = receiver.slice(0, receiver.length/2);

        firstPart.forEach((item,index,arr)=>{
          if(index < Math.floor(firstPart.length/2)){
            let swap = arr[index];
            arr[index] = arr[(arr.length-1) - index];
            arr[(arr.length-1) - index] = swap
          }
        })
        
        let secondPart = receiver.slice(receiver.length/2)

        secondPart.forEach((item,index,arr)=>{
          if(index < Math.floor(firstPart.length/2)){
            let swap = arr[index];
            arr[index] = arr[(arr.length-1) - index];
            arr[(arr.length-1) - index] = swap
          }
        })
        
        return [...firstPart,...secondPart].join(' ')
  }
  }).join(' ')
}
console.log(insideOut("abcd i need a taxi up to ubud"))