

// ********** Immediately Invoked Function Expression (iife) ***********

// a. iife are used to tackle problems which are related global scope pollution
// b. this function immediately run within execution
// c. if a file contains two or more iife functions then they must be terminated by semicolon (;)


// Normal Function
// function chai(){
//     console.log(`DB Connected`);
// }
// chai()


// iife function
// syntax : (function_definition)(empty_function_execution)

// Method 1)  Named iife function 
(function chai(){
    console.log(`DB Connected`);
})();

(function chai(name){
    console.log(`\n ${name} DB Connected`);
})('First');


// Method 2)   Arrow OR UnNamed iife function
( (name)=>{
    console.log(`\n ${name} DB Connected`);   
})('Second')