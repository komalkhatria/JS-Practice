let num= 21;
let negativeNum= -num;    // make the number negative
console.log(negativeNum);

// BASIC ARITHMETIC OPERATIONS
console.log(5+3);   // add
console.log(5-3);   // subtract
console.log(5*3);   // multiply
console.log(5/3);   // divide
console.log(5%3);   // modulus
console.log(5**3);  // power


let str1= "good";
let str2= " morning";
console.log(str1 + str2);

console.log("1" + 2);   // 12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

console.log(2 + true + "7" + false);    // 37false (here, true converts to 1 and false converts to string)
console.log(2+ null + 3 + "6");     // 56 (here, null converts to 0)
console.log(2 + "4" + null);    //24null (here, null converts to string)
console.log(2+ undefined + "7");    // NaN7
console.log("7" + undefined);   // 7undefined

console.log(+true); // 1 (Here the + operator converts the boolean to number type)
// console.log(true+);    // unexpected token')'

console.log(-true); // -1


// INCREMENT AND DECREMENT OPERATIONS
let count= 0;
count++;
console.log(count); // 1

++count;
console.log(count); // 2

count--;
console.log(count); // 1

--count;
console.log(count); // 0