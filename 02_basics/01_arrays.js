let numbers= [2, 5, 1, 8, 3];   // numbers array
let singers= ["shawn", "taylor", "justin", "zayn"]; // string array

const myArray=[2, "32", true, "hello"]; // heterogenous array
console.log(myArray, typeof(myArray));
console.log(myArray[-2]);       // undefined (negative indexing not supported)
console.log(typeof(myArray[2]));


console.log(myArray);
myArray.push(6);    // push adds element at the end of array
console.log(myArray);
myArray.push(9);
console.log(myArray);

console.log();
myArray.pop();      // pop deletes last element of array
console.log(myArray);

myArray.unshift(2);     // unshift adds elements at the beginning of array
console.log(myArray);

myArray.shift();    // shift deletes first element of array
console.log(myArray);   

console.log(myArray.includes(5));
console.log(myArray.indexOf(8));

let myArrayString= myArray.join();   // 2,32,true,hello,6
console.log(newArrayString);

console.log("A", myArray);

// let sliceArr= myArray.slice(1,3);
// console.log(sliceArr);

myArray.splice(1,2, "a", "B");
console.log(myArray);






