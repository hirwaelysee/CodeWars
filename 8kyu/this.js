/*      ================== this keyword in JavaScript =================

--> this is a keyword that refers to the object that is executing or
calling a function.

--> this references to the object that is executing the current function.

        ================== Why do we need this ===================

We need this so that one function can work with many different objects
without hardcoding their names. It reduces repetition and let's 
javaScript figure it out automatically.

const john = {
  name: "John"
};

const jane = {
  name: "Jane"
};

const elysee = {
    name: 'Elysee"
}

function greet(person) {
  console.log("Hello, I'm " + person.name);
}

greet(john);
greet(jane);
greet(elysee);



const john = {
  name: "John",
  greet() {
    console.log("Hello, I'm " + this.name);
  }
};

const jane = {
  name: "Jane",
  greet() {
    console.log("Hello, I'm " + this.name);
  }
};
john.greet(); // Hello, I'm John
jane.greet(); // Hello, I'm Jane
*/

/*  =========== Behaviour of this keyword in regular functions =========

1. if a function is part of an object meaning it's a method in that case this 
references that object. 

2. if a function is not a method meaning it's not part of an object in that case
this keyword references global object in node and window object in browsers.

*/

//Example 1
// const person = {
//     name: 'Elysee',
//     output(){
//         console.log(this);
//     }
// }
// person.output();

// Example 2
// var names = 'Elysee';
// function person(){
//     console.log(this.names);
// }
// person();

//Example 3 
const person = {
    name: 'Elysee',
    outer(){
        // console.log(this)
        
        function inner(){
            console.log(this);
        }

        inner();
    }
}
// person.outer();
person.outer();
