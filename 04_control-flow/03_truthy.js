let email= "";

if(email){  // empty string will equate to false
    console.log("Got user email");
}
else{
    console.log("User email not found");    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// true, "0", 'false', " ", [], {}, function(){}


let arr= [1, 2];
if(arr.length === 0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

let obj= {};
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}

console.log(false == 0);    // true
console.log(false == '');    // true
console.log(0 == '');    // true


// Nullish Coalescing Operator ??: null undefined
// a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let num;
num= 5 ?? 10;
console.log(num); // 5

num= null ?? 10;
console.log(num);   // 10

num= undefined ?? 15;
console.log(num);   // 15

num= undefined ?? 20 ?? 25;
console.log(num);   // 20


// Ternary operator
// condition? true: false

const price= 1000;
price<=800? console.log("Affordable") : console.log("Not affordable")
