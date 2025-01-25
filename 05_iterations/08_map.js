// MAP
const numerals= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const added= numerals.map( (num) => num+=10);
console.log(added);

const tens= numerals.map( (num) => num*=10)
            .map( (num) => num+=10)
            .filter( (num) => num>=50);

console.log(tens);