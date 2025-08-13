//singleton object
const tinderuser = new Object();

//non-singleton object 
const facebookuser = {};

const obj1 = {a : "1" , b : "2" , c: "3"}
const obj2 = {d : "1" , e : "2" , f: "3"}
const obj3 = {g : "1" , h : "2" , i: "3"}

const targetObject = {...obj1 , ...obj2 , ...obj3}
// console.log(targetObject);

//******************************************************************** */

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
 
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks if the property exists in the object and returns true or false

// *******************************************************************************************************

// Destructuring Objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor } = course // destructuring assignment and instructor here is alias for courseInstructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]