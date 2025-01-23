//CREATING ARRAYS

//Array literal
let arr= ['A', 'B'];
console.log(arr);

//Array constructor
let arr2= new Array(5);
arr2.fill(1);   //default values for empty slots
console.log(arr2);


//ARRAY PROPERTIES

//length
console.log(arr2.length);

arr2[5]= 'C';
console.log(arr2);  //array is growable in js

//Adding elements
arr2.push('D');  //at end
arr2.unshift('E');   //at beginning
console.log(arr2);

//Removing elements
arr2.pop(); //from end
arr2.shift();   //from beginning
console.log(arr2);

//slice and splice
let newArr= (arr2.slice(1, 3));
console.log(newArr);

arr2.splice(1, 3, "a", "b");
console.log(arr2);

//concatenation
let combined= arr.concat(arr2);
console.log(combined);

//searching
console.log(arr2.indexOf('F'));   //-1 if not present
console.log(arr2.includes('F'));
console.log();


//ITERATION

//for loop

for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

//for...of loop     (directly iterates over elements)
for(let element of arr2){
    console.log(element);
}

//for...in loop     (iterates over indices)
for(let index in arr2){
    console.log(arr2[index]);
}
console.log();


//HIGHER ORDER FUNCTIONS

let numbers= [1, 2, 3, 4, 5, 6, 7, 8];

//forEach()
numbers.forEach((item)=>{
    console.log(item);
})

//map   (map is an iterative method, creates new array by transforming the current array)
let addedNums= numbers.map(item=> item+10);
console.log(addedNums);

//filter
let even= numbers.filter(num=> num%2==0);
console.log(even);

//reduce
//when we use curly braces, then it is mandatory to use return statement
let sum= numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
})
console.log(sum);

//find
let findNum= numbers.find((num)=>{
    return num;
})
console.log(findNum);

//some
console.log(numbers.some((num)=>num%2==0));

//every
console.log(numbers.every((num)=>num%2==0));

