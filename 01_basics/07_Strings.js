let name= "Nick";
let age= 18;

console.log(typeof(name));  // string

console.log(`${name} is a programmer. He is ${age} years old`);     // string interpolation

const domain= new String("Java-Full-stack");

console.log(domain);
console.log(typeof(domain));    // object
console.log(domain.__proto__);  // {}   // returns prototype: built-in property of an object 

console.log(domain.length);     // 15

console.log(domain[2]);  // v
console.log(domain[domain.length-1]);   // k (last character)
console.log(domain.charAt(2));  // v
console.log(domain.indexOf('v'));   // 2

console.log(domain.toUpperCase());
console.log(domain.toLowerCase());


console.log(domain.substring(2, 7));    // va-Fu
console.log(domain.slice(2, 7));    // va-Fu
console.log(domain.slice(-4));  // tack

const str= "    hello           ";
console.log(str.length);    // 20
const str2= str.trim();
console.log(str2.length);   // 5

const url= "https://brian.com/brian%20gamer";
console.log(url.replace("%20", "-"));

console.log(url.includes("brian"));

console.log(domain.split('-'));
