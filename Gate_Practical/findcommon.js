/*
Write a function findCommon that takes two arrays and returns an array of elements that are common to both.
*/
function findCommon(arr1,arr2){
    let receiver = []
    arr1.forEach(element => {
        arr2.forEach(el =>{
            if(element == el){
                receiver.push(element);
            }
        })
    });
    return receiver
}

console.log(findCommon([1, 2, 3], [2, 3, 4])); // [2, 3]