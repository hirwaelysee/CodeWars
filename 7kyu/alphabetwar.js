/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high 
and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. 
When the left side wins return Left side wins!, when the right side wins return Right side wins!, 
in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims. Sum up each side's letters' power values to determine which side wins.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/
function alphabetWar(fight){
  fight = fight.split('');

  const left = {w:4, p:3, b:2, s:1}
  const right = {m:4, q:3, d:2, z:1}
  
  let countRight = 0;
  let countLeft = 0;

  fight.forEach((it)=>{
      if(left.hasOwnProperty(it)){
        countLeft += left[it];
      }else if(right.hasOwnProperty(it)){
        countRight += right[it];
      }
  });

  if(countRight>countLeft){
    return `Right side wins!`;
  }else if(countLeft>countRight){
    return `Left side wins!`;
  }else{
    return `Let's fight again!`
  }
}
//console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!