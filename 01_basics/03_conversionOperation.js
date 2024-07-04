let score1 = 33
let score2 = "33"
let score3 = "33abc"
let score4 = "prathamesh"
let score5 = null
let score6 = undefined
let score7 = true
let score8 = false

// type 
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);
console.log(typeof score6);
console.log(typeof score7);
console.log(typeof score8);


// 1. conversion in Number :
console.log(`\n Conversion in Number : `);

        //  "33" --> 33
        // "33abc" --> NaN (type is number)
        // true --> 1   false --> 0
 
let valueInNumber = Number(score1);
console.log(valueInNumber);     // 33

valueInNumber = Number(score2);
console.log(valueInNumber);     // 33

valueInNumber = Number(score3);
console.log(valueInNumber);     // NaN --> not a number

valueInNumber = Number(score4);
console.log(valueInNumber);     // NaN

valueInNumber = Number(score5);
console.log(valueInNumber);     // 0 (zero)

valueInNumber = Number(score6);
console.log(valueInNumber);     // NaN

valueInNumber = Number(score7);
console.log(valueInNumber);     // 1

valueInNumber = Number(score8);
console.log(valueInNumber);     // 0


// 2. conversion in Boolean :
console.log(`\n Conversion in Boolean : `);
        //  1 --> true   , 0 --> false
        // "" --> false  , " " --> true  , "parth" --> false



let isLoggedIn1 = 1
let isLoggedIn2 = 0
let isLoggedIn3 = ""
let isLoggedIn4 = " "
let isLoggedIn5 = "parth"

let booleanLoggedIn = Boolean(isLoggedIn1)
console.log(booleanLoggedIn);     // true

booleanLoggedIn = Boolean(isLoggedIn2)
console.log(booleanLoggedIn);     // false

booleanLoggedIn = Boolean(isLoggedIn3)
console.log(booleanLoggedIn);     // false

booleanLoggedIn = Boolean(isLoggedIn4)
console.log(booleanLoggedIn);     // true

booleanLoggedIn = Boolean(isLoggedIn5)
console.log(booleanLoggedIn);     // true



// 3. conversion in String :
console.log(`\n Conversion in String : `);

let num1 = 33
let num2 = null
let num3 = undefined
let bool1 = true
let bool2 = false


let stringNum = String(num1)
console.log(stringNum)              // 33
console.log(typeof stringNum)       // String

stringNum = String(num2)
console.log(stringNum)              // null
console.log(typeof stringNum)       // String

stringNum = String(num3)
console.log(stringNum)              // undefined
console.log(typeof stringNum)       // String

stringNum = String(bool1)
console.log(stringNum)              // true
console.log(typeof stringNum)       // String

stringNum = String(bool2)
console.log(stringNum)              // False
console.log(typeof stringNum)       // String


// 4. Conversion Operations :
console.log(`\n Conversion in Operations : `);

let val = 46
let negval = -val
console.log(negval)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)  //power
// console.log(2/2)
// console.log(2%2)

let str1 = "hello "
let str2 = "prathamesh"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)           // 12
console.log(1 + "2")           // 12
console.log("1" + 2 + 2)       // 122
console.log(1 + 2 + "2")       // 32

console.log(+true)              // 1
console.log(+false)             // 0
console.log(+"")                // 0
console.log(+" ")               // 0
console.log(+"om")              // NaN


