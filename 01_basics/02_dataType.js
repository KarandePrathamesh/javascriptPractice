"use strict"  // represents --> treat all javascript code as newer version
// alert("hello") // we are using node not browser


let name = "prathamesh"
let age = 20
let isLoggedIn = true
let state; //undefined variable
let temp = null // stand alone value as well as data type of type (object)


let arr1 = [1,2,3,4,"prathamesh",true, null];    // type (object)
let arr2 = [1,2,3,4];                            // type (object)
let obj ={                                       // type (object)
    name: "rohan",
    age: 21,
    isLoggedIn:true
};

console.log(typeof(name), typeof(age), typeof(isLoggedIn), typeof(state), typeof(temp), typeof arr1, typeof arr2, typeof obj)
console.table([typeof name, typeof age, typeof isLoggedIn, typeof state , typeof temp, typeof arr1, typeof arr2, typeof obj])


// Datatypes : 
    // 1. primitive datatypes :
    // number --> integer (range 2 pow 53) 
    // bigint -->  range more than number
    // String --> " "
    // boolean --> true / false
    // null -->  it type as well as stand alone value
    // undefined --> not defined variable 
    // symbol --> unique
    
    // 2. non-primitive datatypes :
    // array --> collection of related data items (type object)
    // objects --> instance of class or real world entity 