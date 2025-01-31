
// ++++++++++++ This Keyword  in Objects ++++++++++++++

const user = {
    userName : "Prathamesh",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website `);       
        // console.log(this);                                      // this keyword refers to the curent context 
        
    }
}

user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage()


// console.log(this);      // this keyword in node environment refers to the Object  i.e --> {}  OR Object (global object)
// console.log(this);      // this keyword in browser environment refers to the Windows  i.e --> Windows





// ++++++++++++ This Keyword in functions ++++++++++++++
function chai(){
    const userName = "sammy"
    console.log(this.userName);         // undefined
    console.log(this);                  // <ref *1> Object
    
}
chai()

const chaiOne = function(){
    const userName = "sammy"
    console.log(this.userName);         // undefined
    console.log(this);                  // <ref *1> Object
}
chaiOne()




console.log(`\n\nArrow Functions`);
//  ********** Arrow Functions ***********

// Method 1)
const addTwoNumbers = (num1,num2) =>{
    return num1+num2
}
console.log(addTwoNumbers(3,2));


// Method 2)    Implicit return 
const addTwoNum = (num1,num2) => (num1+num2);
console.log(addTwoNumbers(3,2));


// Method 3)    Returning an Object from arrow function
const returnObject = () =>({userName:"Prathamesh",password:"parth@123"});
console.log(returnObject());
