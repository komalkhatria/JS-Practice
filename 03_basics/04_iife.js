// Immediately Invoked Function Expressions (iife)
// to solve the problem of global pollution, we use iife

// named IIFE
(function check(){
    console.log("pass");
})();   // it is mandatory to specify the end of IIFE with semicolon

( (num) => {
    console.log(`test case ${num} passed`)
}) (5); // argument pass