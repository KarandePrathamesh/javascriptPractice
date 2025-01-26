// *************** functions in JS **************
//  Parameters --> the function definition that accepts arguments and performs some operations are called as parameters
//  Arguments  --> the values which are provided to a function while calling it are called as arguments





function sayMayName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");    
}

// sayMayName     // function reference
// sayMayName()   // function caling







console.log(`\n\nAdd Two Numbers`);
                // taking Parameters
function addTwoNumbers(num1, num2){
    // console.log(num1+num2);  
    // let result = num1+num2
    console.log("Reachable code");    
    return num1+num2
    console.log("Unreachable code");
}


        // passing arguments
// addTwoNumbers()      // results --> NaN
addTwoNumbers(3,4)      // results --> 7
addTwoNumbers(3, '4')      // results --> 34
addTwoNumbers(3, "4")      // results --> 34
addTwoNumbers(3, "_Parth")      // results --> 3_Parth
addTwoNumbers(3, 'p')      // results --> 3p
addTwoNumbers(3, null)      // results --> 3


const res = addTwoNumbers(3,4)
console.log("result : ", res);      // result : undefined (because we ve'nt return anything from the function)




console.log(`\n\nLogin User Message`);
// function definition
function userLoginMessage(userName){
    if(userName === undefined){
        console.log("please enter username");
    }
    return `${userName} Logged In `
}

// function calling 
let loggedUserName = userLoginMessage("Prathamesh")
console.log(loggedUserName);




