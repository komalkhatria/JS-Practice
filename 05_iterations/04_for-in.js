const myObject= {
    "js": "javascript",
    "cpp": "c++",
    "py": "python"
}

for(const key in myObject){
    console.log(`${key} : ${myObject[key]}`);
}

const languages= ["java", "python", "javascript", "cpp"];
for(const lang in languages){
    console.log(lang);  // 0 1 2 3
}

for(const key in languages){
    console.log(languages[key]);
}

// Map cannot be iterated using for in loop
const india= new Map();
india.set("Rajasthan", "Jaipur");
india.set("Gujarat", "Gandhinagar");
india.set("Maharashtra", "Mumbai");

for(const key in india){
    console.log(india[key]);
}


