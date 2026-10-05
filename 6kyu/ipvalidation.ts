/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/
export function isValidIP(str: string): any{
  
    let receiver = str.split('.').map(Number);
    
    if(receiver.join('.') != str) return false;
  
    let handler: boolean[] = receiver.map((item,_, arr)=>{
      
      if(arr.join('.') != str) return false  

      if(arr.some(item => isNaN(item)) || arr.length != 4){
        return false
      }

      if(receiver.every(item => item == 0)) return true;
      
      if(item > 255 || item < 0) {
        return false
      }
      
      return true; 
    })
  
    if(handler.every(item=> item == true)){
      return true
    }else{
      return false
    }
}