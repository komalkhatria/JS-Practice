const userId= 20100381;
let userEmail= "komal@google.com";
var password= "12345";
cityName= "Jaipur";      // works even without let or var, but not preferred
let stateName;      //undefined

// userId= 31008402     //cannot reassign constant variable
userEmail= "komal@gmail.com";
password= "54321";
cityName= "Noida";

console.log(userId);
console.table([userId, userEmail, password, cityName, stateName]);

/* 
    Prefer not to use var 
    because of issue in block scope and functional scope
*/