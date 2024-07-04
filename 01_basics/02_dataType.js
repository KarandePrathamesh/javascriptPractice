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

const myFuntion = function(){
    console.log("hello this is a function")
}

console.log(typeof(name), typeof(age), typeof(isLoggedIn), typeof(state), typeof(temp), typeof arr1, typeof arr2, typeof obj, typeof myFuntion)
console.table([typeof name, typeof age, typeof isLoggedIn, typeof state , typeof temp, typeof arr1, typeof arr2, typeof obj, typeof myFuntion])



const val = 10 
const val1 = 10.30
const nm = "prathamesh"
const bignum = 12625336774438n
const isLogged = true
const outsideTemp = null
const someval = undefined;
let somenum;

const id = Symbol('123')        // unique id
const anotherId = Symbol('123') // another unique id

// let's  check are the are identical or different
console.log (id === anotherId)  // false  (becasue they are unique)




// Datatypes : 
  // A. primitive datatypes : (total : 07)  (call by value)
    // 1. number --> integer (range 2 pow 53) 
    // 2. bigint -->  range more than number
    // 3. String --> " "
    // 4. boolean --> true / false
    // 5. null -->  it type as well as stand alone value
    // 6. undefined --> not defined variable 
    // 7. symbol --> unique
    
  // B. non-primitive datatypes : (reference type)   (call by reference)
    // array --> collection of related data items (type object)
    // objects --> instance of class or real world entity 
    // functions --> can also be a non primitive data types



    // Memory Management :
    // Stack (primitive dataTypes)    Heap (non- primitive dataTypes)

    // no change on original value because copy of value is send ont the actual value (stack)
    let myName = "prathamesh"
    let myAnotherName = myName;
    myAnotherName = "Dinesh"
    console.log(myName);
    console.log(myAnotherName);

    // change in original value because the copy is not send both represents the same values (Heap)
    let newObj = {
        name: "Rohan",
        upi: "upi@ypl"
    }
    
    let myNewObj = newObj;
    myNewObj.name = "parth"

    console.log(newObj)
    console.log(myNewObj)



    