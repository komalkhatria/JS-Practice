if(true){
    let a=10;
    var b= 20;
    const c= 30;
}
// console.log(a);     // a has local scope, cannot access globally
console.log(b); // 20 (local var is accessible globally)
// console.log(c);     // c has local scope, cannot access globally

let j= 40;
var k= 50;
if(true){
    let j= 400;
    var k= 500;
    console.log(`Local j: ${j}`);   // 400
    console.log(`Local k: ${k}`);   // 500
}
console.log(`Global j: ${j}`);  // 40
console.log(`Global k: ${k}`);  // 500  (var can be redeclared)


function one(){
    const username= "nick";
    function two(){
        const id= 110;
        console.log(username);
    }
    // console.log(id);    // id is not defined
    two();
}
one();  // nick


if(true){
    const name= "shoes";
    if(true){
        const brand= "adidas";
        console.log(name+ ": " + brand);    // shoes: adidas
    }
    // console.log(name+ " " + brand);  // brand is not defined
}
// console.log(name);   // name is not defined


console.log(addOne(5));
function addOne(num){
    return num+1;
}


console.log(addTwo(5));     // Cannot access 'addTwo' before initialization

// hoisting
const addTwo= function(num){    // expression
    return num+2;
}





