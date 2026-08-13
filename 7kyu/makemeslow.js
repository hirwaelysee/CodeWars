/*
Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/

function makeMeSlow() {
  // This function is too fast!
  let start = Date.now();
  
  while ((Date.now() - start) < 7000){
    for (let x = 0; x < 1000000; ++x) { }
  }
  
}