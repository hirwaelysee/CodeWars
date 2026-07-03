/*
Create a function that performs a pivot operation, 
on an array of objects, converting it from long to wide format based
on specified keys.

const longFormatData = [
        { id: 1, name: "Alice", age: 30 },
        { id: 2, name: "Bob", age: 25 },
        { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];
const wideFormatData = pivotLongToWide(longFormatData, keys);
console.log(wideFormatData);
output: {
    id: [ 1, 2, 3 ],
    name: [ 'Alice', 'Bob', 'Charlie' ]
}
*/
function pivotLongToWide(obj, arr){
    let id = obj.map((item)=> item[arr[0]]);
    let names = obj.map((item)=> item[arr[1]]);
    return {
        [arr[0]]: id,
        [arr[1]]: names
    }
}
const longFormatData = [
        { id: 1, name: "Alice", age: 30 },
        { id: 2, name: "Bob", age: 25 },
        { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];
console.log(pivotLongToWide(longFormatData,keys));