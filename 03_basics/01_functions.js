function add(num1, num2=10){
    console.log(num1 + num2);
}
add(3,8);
add(4, "6");
add(3); // 13

let result= add(3, 8);
console.log(result);    // the function returns undefined

function multiply(num1, num2){
    let result= num1 * num2;
    return result;
}

let result2= multiply(2, 4);
console.log(result2);   // the function returns 8


function loginMessage(username){
    if(username === undefined){
        console.log("Enter a user name!")
        return;
    }
    return `${username} just logged in`;
}
console.log(loginMessage("Nick"));
console.log(loginMessage());    // undefined just logged 


function shoppingCart(val1, val2, ...items){    // ... rest operator
    console.log(val1, val2, items);
}
shoppingCart("munchies", "drinks", "maggi", "sprite", "chocolate", "coffee");

let product= {
    productName: "dairy milk",
    price: 99
}

function handleObject(anyObject){
    console.log(`Product name is ${anyObject.productName} and its price is ${anyObject.price}`);
}
handleObject(product);

handleObject({
    productName: "nescafe",
    price: 199
})

const vowels= ['A', 'E', 'I', 'O', 'U'];

function handleArray(anyArray){
    console.log(`First element is ${anyArray[0]}, last element is ${anyArray[anyArray.length-1]}`)
}