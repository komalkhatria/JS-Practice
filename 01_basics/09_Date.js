let myDate= new Date();
console.log(typeof(myDate));    // object
console.log(myDate);

console.log(myDate.toString());     // Mon Jan 06 2025 11:03:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     // Mon Jan 06 2025
console.log(myDate.toLocaleString());   // 6/1/2025, 11:03:45 am
console.log(myDate.toLocaleDateString());   // 6/1/2025
console.log(myDate.toJSON());   // 2025-01-06T05:10:22.367Z
console.log(myDate.toISOString());  // 2025-01-06T05:10:22.367Z
console.log("\n");


let dob= new Date(2018, 0, 11);
console.log(dob.toString());
console.log(dob.toLocaleString());
console.log(dob.toLocaleDateString());
console.log("\n");


let demoDate= new Date("2023-01-26");
console.log(typeof(demoDate));  // object
console.log(demoDate);
console.log(demoDate.toDateString());   


let myTimeStamp= Date.now();
console.log(myTimeStamp);

console.log(demoDate.getTime());
console.log(Date.now()/1000);

console.log(`\nDate: ${myDate.toDateString()}`);    // Date: Mon Jan 06 2025
console.log(myDate.getDay());   // 1
console.log(myDate.getMonth()); // 0
console.log(myDate.getFullYear());  // 2025


const weekdayName= myDate.toLocaleString('default', {
    weekday: "long"
})

console.log(weekdayName);   // Monday



