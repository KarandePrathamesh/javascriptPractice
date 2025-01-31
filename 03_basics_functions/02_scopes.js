// ****** Scope Of let,const,var *******

// let a = 10 
// const b = 20
// var c = 30
// console.log(a);      // --> 10
// console.log(b);      // --> 20
// console.log(c);      // --> 30




let a = 45
var c = 92
if(true){
    let a = 10 
    const b = 20
    var c = 30
    console.log(`Block Scope a : ${a}`);
    console.log(`Block Scope b : ${b}`);
    console.log(`Block Scope c : ${c}`);
}

console.log(`Global Scope a : ${a}`);
// console.log(b);
console.log(`Global Scope c : ${c}`);       // therfore the var keyword does not follows block scope that is why we don't use it



// ********** nested Scope of variables in function block ***********
//  example 1)
function one(){
    const userName = "Prathamesh"
    function two(){
        const website = "youtube"
        console.log(userName);        
        console.log(website);        
    }
    // console.log(website);            // error --> cuz website variable is not accesible out side the two() function scope
    two()
}
one()

// example 2)
if(true){
    const userName = "Prathamesh"
    if(userName === "Prathamesh"){
        const website = " youtube"
        console.log(userName + website);
    }
    // console.log(website);            // error -->cuz website variable is not accesible out side the scope  
}
// console.log(userName);               // error -->cuz userName variable is not accesible out side the scope 



// +++++++++++++++++++ intresting +++++++++++++++++++++
// example 1)
console.log(addOne(5));             // normal function can be called before the function definition 
function addOne(num){
    return num + 1
}
console.log(addOne(5));



// example 2)
// console.log(addTwo(5));             // erroe -> cuz variable decalred function cannot be accessed brfore initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
