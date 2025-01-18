let nums= [1, 2, 3, 4, 5];
for(const n of nums){
    console.log(n);
}

let message = "Hello World";
for(const ch of message){
    console.log(ch);
}

// Map : holds unique key- value pairs
const india= new Map();
india.set("Rajasthan", "Jaipur");
india.set("Gujarat", "Gandhinagar");
india.set("Maharashtra", "Mumbai");

console.log(india);

for(const [key, value] of india){
    console.log(`${key} : ${value}`);
}

const obj= {
    1: "apple",
    2: "mango",
    3: "banana"
}

// object is not iterable using for-of
// still there's a way to print object values as below
for(let a of Object.keys(marks)){
    console.log(marks[a]);
}

for(const[key, value] of obj){
    console.log(`${key} : ${value}`);
}
