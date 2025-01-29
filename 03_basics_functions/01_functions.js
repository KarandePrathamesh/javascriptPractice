


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
                                    // result : 7


                                    

console.log(`\n\nLogin User Message`);
// function definition
function userLoginMessage(userName){                // userName = "sammy"  --> default parameter
    if(userName === undefined){                     // if(!username)
        console.log("please enter username");
        return
    }
    return `${userName} Logged In `
}

// function calling 
// console.log(userLoginMessage("Prathamesh"));     // result : Prathamesh Logged In
// console.log(userLoginMessage());                 // result : undefined Logged In
let loggedUserName = userLoginMessage("Prathamesh")
console.log(loggedUserName);




console.log(`\n\nTaking Parameter Using Rest Operator:`);
function calculateCartPrice(val1,val2,...num1){       //num
    return num1
}
// console.log(calculateCartPrice(3));              // 3
// console.log(calculateCartPrice(3,4,2,5,6));              // 3  takes only first value as result 
//  to take multiple arguments we shold pass parameter as a (...num1) rest operator
console.log(calculateCartPrice(400,500,200,300,400));





console.log(`\n\nPassing object as a argument to Function :`);
const user = {
    username: "Prathamesh",
    price:999
}
function handleUser(anyObject){
    console.log(`Username is : ${anyObject.username} and Purchase price is : Rs.${anyObject.price}`);    
}
// handleUser(user)     // passing object as a argument
// handleUser()         // passing object as a argument --> undefined undefined i.e why we need to add type checking 
handleUser({
    username: "Jay",
    price:399
})




console.log(`\n\nPassing Array as a argument to Function :`);
const myNewArray=[200,900,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([232,343,454,565]));

