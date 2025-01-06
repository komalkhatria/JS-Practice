// TWO TYPES OF DATATYPES

// 1. PRIMITIVE 

// string
let str= "hello";
console.log(str, ":" , typeof(str));

// number
let num= 56.4;
console.log(num, ":", typeof(num));

// boolean
let isValid= true;
console.log(isValid, ":", typeof(isValid));

// null 
let a= null;
console.log(a, ":", typeof(a));     // object

// undefined
let x;
console.log(x, ":", typeof(x));

// symbol
let myId= Symbol("123");
let yourId= Symbol("123");
console.log(myId, ":", typeof(myId));
console.log(myId===yourId);

// bigInt
let bigNumber= 52226546298742743242n;
console.log(bigNumber, ":", typeof(bigNumber));


// 2. REFERENCE (NON-PRIMITIVE)

// Array
let fruits=["Apple", "Mango", "Banana", "Grapes"];
console.log(typeof(fruits));    // object

// Object
let myObject= {
    name: "Nick",
    age: 18
}
console.log(typeof(myObject));  // object

// Function
let myFunction= function(){
    console.log("Hello world");
}
console.log(typeof(myFunction));    // function


/******************************************************************************************************************************/

// TWO TYPES OF MEMORY

// 1. STACK- primitive datatypes

let userName= "Mark";
let playerName= userName;

playerName= "Brian";
console.log(playerName);    // Brian
console.log(userName);  // Mark ( value of userName won't change as we're working with copy of the primitive datatype)


// 2. HEAP- non-primitive datatypes

let user= {
    name: "unknown",
    email: "user@gmail.com"
}

let user1= user;

user1.email= "mark@gmail.com";

console.log(user1.email);   // mark@gmail.com
console.log(user.email);    // mark@gmail.com (value of user will also change as we're working on reference of the object)
