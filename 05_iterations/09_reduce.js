const numbers= [1, 2, 3];

const initialValue= 0;
const total= numbers.reduce( function(accumulator, currentValue){
    console.log(`Accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue);

console.log(total);

const myTotal= numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(myTotal);


const shoppingCart= [
    {course: "web dev", price: 999},
    {course: "data science", price: 1999},
    {course: "devops", price: 1499}
]

const bill= shoppingCart.reduce(
    (accumulator, item) => accumulator + item.price, initialValue
);
console.log(bill.toLocaleString(bill, 'en-In'));
