let course= {
    courseName: "Full Stack Development",
    price: 499,
    learningPlatform: "udemy"
}

console.log(course.learningPlatform);

const {learningPlatform}= course; // destructuring the object
console.log(learningPlatform);

const {learningPlatform: instructor}= course;   
console.log(instructor);

/* react
const navbar = ({company}) => {       // (props.company)

}
navbar(company= "software company");
*/