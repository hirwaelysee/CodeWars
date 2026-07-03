function reverse(arr){
    return arr.filter((item)=> item.length>4).reverse();
}
const names = ["Elysee", "Ines", "Joel", "Boris"];
console.log(reverse(names));