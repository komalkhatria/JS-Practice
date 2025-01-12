const user= {
    username: "Nick",
    course: "marketing",
    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username= "Mike";
user.welcomeMessage();
console.log(this);  // {} global object is empty

// but in browser, global object is Window (this returns Window)

const numbers= function(){ 
    const num= 10;
    console.log(this);  // returns number of methods
    console.log(this.num);  // undefined
}
numbers();

// arrow function
const vowels= () =>{
    console.log("arrow function");
    console.log(this);  // {} as it is arrow function
}
vowels();

const add= function(num1, num2){
    return num1+ num2;
}
console.log(add(4, 3));

const subtract= (num1, num2) => num1- num2;     // implicit return
console.log(subtract(4, 3));

const returnObject= (num1) => {chocolate: "kitkat"};
console.log(returnObject(1));   // undefined