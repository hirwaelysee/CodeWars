/*
.Unique Products Report
You are given an array of orders:

const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];


Task:

Use for of Loop, Set, and destructuring

Write a function createReport(orders) that returns:

{
uniqueProducts: ["Laptop","Mouse","Keyboard","Monitor"],
firstProduct:"Laptop",
totalUnique:4
}
*/
function createReport(orders){
    const uniqueProduct = new Set();
    const firstProduct = orders[0].product;
    for(order of orders){
        uniqueProduct.add(order.product);
    }
    const uniqueProducts = [...uniqueProduct];
    const obj = {
        "uniqueProducts": uniqueProducts,
        "firsProduct": firstProduct,
        totalUnique: uniqueProducts.length
    }
    return obj;
}
console.log(createReport([
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
]));