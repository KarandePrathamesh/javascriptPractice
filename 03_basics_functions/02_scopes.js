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



