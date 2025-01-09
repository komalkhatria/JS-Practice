// Singleton object : when we create object using constructor

const student= new Object();
student.id= 101;
student.name= "Aarav";
student.contact= [6772786123, "aarav@gmail.com"];

console.log(student);


const userInfo= {
    id: 25367,
    name: {
        firstname: "Peter",
        lastname: "Kavinsky"
    },
    grade: 'A'
}

console.log(userInfo);
console.log(userInfo.name.lastname);    // Kavinsky

let obj1= { 1: "A", 2: "B"};
let obj2= { 3: "C", 4: "D"}; 
// let obj3= {obj1, obj2};
// console.log(obj3);  // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

// let obj3= Object.assign({}, obj1, obj2);
// console.log(obj3);  // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

let obj3= {...obj1, ...obj2};
console.log(obj3);  // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

// Data from database comes in the form of array

let users= [
    {
        id:123,
        email: "abc@gmail.com"
    },
    {
        id:532,
        email: "tdg@gmail.com"
    },
    {
        id:322,
        email: "uiy@gmail.com"
    }
]

console.log(users[1].email);    // abc@gmail.com

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

console.log(obj3.hasOwnProperty("isLoggedIn"));