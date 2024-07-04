// 15. Arrow Functions : 

// function sum(a,b){    //normal functions
//     return a+b;
// }


// arrow function type 1 :
sum = (a,b) =>{return a+b};

// arrow function type 2 :
sub = (a,b) => a-b;

console.log(sum(4,5));
console.log(sub(5,2));



// 16. setTimeout and setInterval in javascript

// setTimeout --> (run only once)
logkaro = () =>{
    // document.querySelectorAll('.container')[1].innerHTML = "<b> set time out function </b>";
    document.querySelectorAll('.container')[1].innerHTML = "<b> set Interval fired </b>";
    console.log("I'm your log");
}
setTimeout(logkaro, 5000);

// setInterval --> (runs repeatedly after some time)
clr = setInterval(logkaro, 7000);

console.log(clearInterval(clr, 15000));
// console.log(clearTimeout(clr, 15000));

