let hollywood_singers= ["shawn", "taylor", "justin", "ariana", "ed sheeran"];
let bollywood_singers= ["pritam", "arijit", "shreya", "atif", "alka"];

// hollywood_singers.push(bollywood_singers);
// console.log(hollywood_singers);

// let all_singers= hollywood_singers.concat(bollywood_singers);
// console.log(all_singers);

let all_singers= [...hollywood_singers, ...bollywood_singers];
console.log(all_singers);

const numbers= [1, 2, [3, 4], 5, [6, [7, 8, [10, 11]]], 9];
console.log(numbers.flat(2));   // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 10, 11 ], 9 ]

console.log(Array.isArray("Nick")); // false
console.log(Array.from("Nick"));    // [ 'N', 'i', 'c', 'k' ]

let n1= 100;
let n2= 200;
let n3= 300;

console.log(Array.of(n1, n2, n3));  // [ 100, 200, 300 ]




