class CaesarCipher{

  constructor(num){
    this.num = num;
  }
  
  encode(receiver){
    receiver = receiver.toLowerCase();
    
    return receiver.split('').map((item)=>{
        if(item >= 'a' && item<= 'z'){  
           return item = String.fromCharCode(
             (((item.charCodeAt(0)- 97)+ this.num)%26)+97)
             .toUpperCase(); 
        }
        return item;
    }).join('');
  }
  
  decode(handler){
    handler = handler.toUpperCase();
    return handler.split('').map((item)=>{
       if(item>='A' && item<='Z'){
          return String.fromCharCode(
            (((item.charCodeAt(0)- 65 - this.num)%26+26)%26)+65)
            .toUpperCase(); 
       }
      return item;
    }).join('')
  }
}

const obj = new CaesarCipher(5);
console.log(obj.encode('Codewars'));// output should be HTIJBFWX
console.log(obj.decode('HTIJBFWX'));// output should be WAFFLES
