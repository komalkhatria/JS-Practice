// Object literals
const mykey= Symbol("key123");

const user= {
    name: "nick",
    age: 18,
    [mykey]: "mykey123",
    isLoggedIn: false,
    contact: [8768756798, "nick@gmail.com"]
}

console.log(user.contact[1]);
console.log(user["name"]);
console.log(user[mykey]);
console.log(typeof(user[mykey]));

console.log(typeof(mykey));

user.age= 20;
console.log(user["age"]);   // 20
// Object.freeze(user);     // cannot update the object user anymore
// user.age= 19;
// console.log(user["age"]);   // 20

user.greeting= function(){
    console.log("Hello user");
}
console.log(user.greeting); // [Function (anonymous)]
console.log(user.greeting());   // good morning

user.greeting2= function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greeting2());  // Hello nick