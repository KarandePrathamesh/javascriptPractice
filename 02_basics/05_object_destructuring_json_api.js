const course={
    courseName:"js in hindi",
    price:999,
    courseInstuctor:"Hitesh"
}

// course.courseName
// course['courseName']


// ******* Object Destructuring (2ways)*******

// const {courseName,courseInstuctor,price} = course
const {courseName: cName ,courseInstuctor: cInstructor ,price: p} = course
// console.log(courseName);
console.log(cName);
// console.log(price);
console.log(p);
// console.log(courseInstuctor);
console.log(cInstructor);



// ******* JSON API *******
// Javascript object notation - JSON
// application programming interface - API
// they are always without name


//  1. Object API :
// {
//     "name": "hitesh",
//     "price":"free",
//     "courseName":"js in hindi",
// }


//  2. Array API :
// [
//     {},
//     {},
//     {},
//     {},
// ]




// ******  API References ******
//  website to get api -> randomuser me api 
// to understand api -> json formatter