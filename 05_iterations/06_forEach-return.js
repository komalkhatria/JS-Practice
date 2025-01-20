const fruits= ["apple", "mango", "banana", "grapes"];

const fNames= fruits.forEach((name) =>{
    return name;    
})
console.log(fNames);    // undefined


const nums= [];
numbers.forEach( (n) => {
    if(n<6){
        nums.push(n);
    }
})

console.log(nums);


// FILTER ARRAY OF OBJECTS

const books= [
    {title: "Book One", genre: "fiction", publish: 2012, edition: 2017},
    {title: "Book Two", genre: "fantasy", publish: 2010, edition: 2014},
    {title: "Book Three", genre: "adventure", publish: 2009, edition: 2015},
    {title: "Book Four", genre: "fiction", publish: 2005, edition: 2014},
    {title: "Book Five", genre: "thriller", publish: 2008, edition: 2010},
    {title: "Book Six", genre: "fantasy", publish: 2011, edition: 2016},
    {title: "Book Seven", genre: "adventure", publish: 2012, edition: 2019},
    {title: "Book Eight", genre: "fiction", publish: 2001, edition: 2013}
]

// Books published after 2010
const newBooks= books.filter((book) => book.publish>2010);
console.log(newBooks);

// Fictional books
const fictionBooks= books.filter( (book) => {
    return book.genre==='fiction';
})
console.log(fictionBooks);

// Books older than 2012 edition
const olderBooks= [];
books.forEach( (book) => {
    if(book.edition<2012){
        olderBooks.push(book);
    }
})
console.log(olderBooks);
