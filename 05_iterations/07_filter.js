const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums= numbers.filter((n) =>{
    return n;
})
console.log(newNums);

const filteredNums= numbers.filter((n) => {
    return n>4;
})
console.log(filteredNums);