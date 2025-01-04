// CONVERSION TO NUMBER
let marks= "25";
console.log(typeof(marks));     // string

let marksInNumber= Number(marks);
console.log(typeof(marksInNumber));  // number
console.log(marksInNumber); // 33

let alphaNumeric= "25xyz";
console.log(typeof(alphaNumeric));  // string

let alphaToNum= Number(alphaNumeric);
console.log(typeof(alphaToNum));    // number
console.log(alphaToNum);    // NaN

// "25xyz" => NaN (Not a Number)
// null => 0
// undefined => NaN
// true=> 1, false => 0;


// CONVERSION TO BOOLEAN
let isLoggedIn= 1;  
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

let emptyStr= "";
let booleanEmptyStr= Boolean(emptyStr);
console.log(booleanEmptyStr);    // false

let str= "javascript";
let booleanStr= Boolean(str);
console.log(booleanStr);    // true

// 1 => true, 0 => false
// any integer => true
// "" => false, "js" => true
// undefined => false
// null => false


// CONVERSION TO STRING
let num= 23;
let numToString= String(num);
console.log(numToString);
console.log(typeof(numToString));