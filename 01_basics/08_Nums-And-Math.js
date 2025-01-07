const points= 10;
console.log(points);

const marks= new Number(300);
console.log(marks);

console.log(marks.toString().length);

console.log(typeof(marks));

console.log(marks.toFixed(1));

let x= 124.81238;
console.log(x.toPrecision(3));

const hundreds= 1000000;
console.log(hundreds.toLocaleString('en-In'));

/*********************************************************************************/

// Math functions

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(123.54));
console.log(Math.ceil(123.54));
console.log(Math.floor(123.54));

console.log(Math.random());
console.log(Math.floor((Math.random()*10) + 1));

const min= 10;
const max= 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);

