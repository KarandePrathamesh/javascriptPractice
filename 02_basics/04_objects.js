// ***** Objects in Javascript *****

// Methods of Declaring Objects 
//      1. Object Literal  --> Non-Singleton Object    // for eg. const JsUser = {}
//      2. Constructor     --> Singleton Object        // for eg. Object.create OR new Object()



//  2. Constructor
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));       // returns a array of keys of object
console.log(Object.values(tinderUser));       // returns a array of values of object
console.log(Object.entries(tinderUser));       // returns a array of keys and values of object in seperate arrays
console.log(tinderUser.hasOwnProperty('email')) ;       // returns true if property  exists if not returns false 
console.log(`\n`);






// Nested Objects (Objcet Literal)     
console.log(`\nNested Objects:`);

const regularUser = {
    email: "some@gmai.com",
    fullname :{
        userfullname:
        {
            firstName:"Prathamesh",
            lastName:"Karnade"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstName);
console.log(regularUser.fullname?.userfullname?.lastName);      // ? is suggests that the value is get from the api or not  (retrun true if gets returns false if not get)









// Object Concatination Ways:
console.log(`\n Concatinating Objects together in single object :`);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',6:'f'}

// 1. Method First
const objOne = { obj1, obj2, obj3}         // it will return object within object
console.log(objOne);



// 2. Object.assign() Method
//      syntax : Object.assign(target:{}, source:{str1,str2,str3})

// const objTwo = Object.assign(obj1, obj2, obj3)         // this is not a correct way to use Object.assign() Method syntax wise and even logic wise
const objTwo = Object.assign({}, obj1, obj2, obj3);       // this is correct way 
console.log(objTwo);



// 3. Spred Operator ({...objName1, ...objName2, ...objName  and_So_On})
const objThree = {...obj1, ...obj2, ...obj3}
console.log(objThree);




// ******** Accessing Array of Objects *********
const users = [
    {
        id:1,
        email:'a@gmail.com'
    },
    {
        id:2,
        email:'b@gmail.com'
    },
    {
        id:3,
        email:'c@gmail.com'
    }
]

console.log(users[1].id);
console.log(users[1].email);

