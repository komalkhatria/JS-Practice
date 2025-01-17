for(let i= 1; i<=10; i++){
    console.log(i);
}

for(let i= 2; i<=10; i++){
    console.log(`\nTable of ${i}:`)
    for(let j= 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

for(let i=1; i<=10; i+=2){
    if(i==7){
        console.log("Loop break!")
        break;
    }
    console.log(i);
}

for(let i=0; i<=10; i+=2){
    if(i==4){
        console.log("Number skip!")
        continue;
    }
    console.log(i);
}

//Printing object using for loop
let marks= {
    A: 20,
    B: 18,
    C: 16,
    D: 14
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i] + " got " + Object.values(marks)[i] + " marks");  //or 
    console.log(Object.keys(marks)[i] + " got " + marks[Object.keys(marks)[i]] + " marks"); //this
}
console.log(Object.values(marks));

for(let a in marks){
    console.log(marks[a]);
}

