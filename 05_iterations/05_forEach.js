const fruits= ["apple", "mango", "banana", "grapes"];
fruits.forEach( function(val){
    console.log(val);
})

fruits.forEach( (val) =>{
    console.log(val);
})

function fruitNames(val){
    console.log(val);
}
fruits.forEach(fruitNames);

fruits.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

// accessing objects in array
const coding= [
    {
        "name": "javascript",
        "extension": "js"
    },
    {
        "name": "python",
        "extension": "py"
    },
    {
        "name": "c++",
        "extension": "cpp"
    }
]

coding.forEach((item)=> {
    console.log(item.name);
})