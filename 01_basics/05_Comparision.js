console.log(5>3);   // true
console.log(5<3);   // false
console.log(5>=3);  // true
console.log(5<=3);  // false
console.log(5==3);  // false
console.log(5==5);  // true
console.log(5===5); // true


// Comparision operators convert string to number
console.log("2" > 1);   // true
console.log(2 > "1");   // true
console.log("2" == 2);  // true
console.log("1" >= true);   // true


/* 
Equality check== and Comparisions < > <= >= work differently
Comparisions convert null to a number treating it as 0  
*/
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true


// undefined compared with any other datatype will give false
console.log(undefined > true);  // false
console.log(undefined == 0); // false
console.log(undefined >= "8"); // false


// === strict check datatype and value
console.log("5" == 5);  // true (converts string to number)
console.log("5" === 5); // false