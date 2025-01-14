const membership= true;
if(membership){
    console.log("You are a member of this club");
}

const age= 18;
if(age>=18){
    console.log("Valid for vote");
}
else{
    console.log("Invalid for vote");
}

const signInWithGoogle= true;
const signInWithGmail= false;

if(signInWithGoogle || signInWithGmail){
    console.log("Login valid");
}
else{
    console.log("Login invalid");
}

const marks= 350;
if(marks<120){
    console.log("Fail");
}
else if(marks<250){
    console.log("Average");
}
else if(marks<380){
    console.log("Good");
}
else{
    console.log("Excellent");
}