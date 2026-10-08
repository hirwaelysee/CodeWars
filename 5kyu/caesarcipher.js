class CaesarCipher{
  CaesarCipher(num){
    this.num = num;
  }
  
  encoder(receiver){
    receiver = receiver.toUpperCase();
    
    return receiver.split('').map((item)=>{
        if(item >= 'A' && item<= 'Z'){ 
           return item = String.fromCharCode((item.charCodeAt(0))+ this.num).toUpperCase();
        }
        return item;
    }).join('');
  }
  
  decoder(handler){
    handler = handler.toLowerCase();
    return handler.split('').map((item)=>{
       if(item>=a && item<=z){
         return String.fromCharCode((item.charCodeAt(0))-this.num).toUpperCase();
       }
      return item;
    }).join('')
  }
}

const obj = new CaesarCipher(6);
console.log(obj.encoder('Codewars'));
console.log(obj.encoder('BFKKQJX'));
