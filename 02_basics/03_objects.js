

// ***** Objects in Javascript *****

// Methods of Declaring Objects 
//      1. Object Literal  --> Non-Singleton Object    // for eg. const JsUser = {}
//      2. Constructor     --> Singleton Object        // for eg. Object.create



//  1. Object Literals 

// Declaring a Symbol type datatype and passing it as a key to object 
const mySymbol1 = Symbol("key1");
const mySymbol2 = Symbol("key2");

const JsUser = {
    name: "Prathamesh",                     // acessed by . and ['']
    "Fname_Lname":"Prathamesh Karande",         // accced only by [''] in older version of js 
    age: "22",                              // acessed by . and ['']
    location:"Pune",                        // acessed by . and ['']
    email:"karande@gmail.com",              // acessed by . and ['']
    isLoggedIn: false,                      // acessed by . and ['']
    lastLoggedInDays:["monday", "friday"],
    mySymbol1 : "myKey1",               // this is not a proper way of declaring symbol
    [mySymbol2] : "myKey2",             // proper way to declare a symbol
} 


//  All the following are accesible by both methods
 console.log(JsUser.name);
 console.log(JsUser['name']);

 console.log(JsUser.email);
 console.log(JsUser['email']);

 console.log(JsUser.location);
 console.log(JsUser['location']);

//  passing string as a key to object
 console.log(JsUser.Fname_Lname);
 console.log(JsUser['Fname_Lname']);

//  Accesing Symbol Datatype
 console.log(JsUser.mySymbol1);
 console.log(typeof JsUser.mySymbol1);
 
//  Accesing Symbol Datatype 
 console.log(JsUser[mySymbol2]);
 console.log(typeof [mySymbol2]);
 


 //  Freezing  values of object
console.log(`\nFreezing Values of Object:`);
console.log(`Before Freezing Values of Object:`);
JsUser.email = "karandep@chatgpt.com"
console.log(JsUser);

console.log(`After Freezing Values of Object:`);
// Object.freeze(JsUser)
JsUser.email = "karandep@microsoft.com"     // will not give error because object is freeze now
console.log(JsUser);


// Assigning function as a variables to the object
JsUser.greetings = function(){
    console.log('hello js users');   
}

console.log(JsUser.greetings);          // undefined   --> it will return only function reference
console.log(JsUser.greetings()) ;       // type error JsUser.greetings is not a function (because of object freezing )


JsUser.greetingsOne = function(){
    console.log(`Hello..!!! js user ${this.name} and ur fname_lname ${this.Fname_Lname}`);   
}
// console.log(JsUser.greetingsOne);
console.log(JsUser.greetingsOne());
