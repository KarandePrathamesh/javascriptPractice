// +++++++++++++++++++++++++++++  Number  ++++++++++++++++++++++++++++++++

// Number {100}
// [[Prototype]]: Number
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 100


// Number.MAX_VALUE
// 1.7976931348623157e+308
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// Number.MIN_SAFE_INTEGER
// -9007199254740991
// Number.MIN_VALUE
// 5e-324

console.log(Number)

const score = 400
console.log(score);
// console.log(typeof(score)); // --> number

const balance = new Number(100)
console.log(balance);
console.log(`type of balance before conversion : ${typeof(balance)}`); // --> object

console.log(`converting a number into string and cal length :  ${balance.toString().length}`);
console.log(`type of balance after conversion ${typeof(balance)}`); // --> objcet 


console.log(balance.toFixed(2)); // taking value up fixed decimal position

const anotherNum = 45.923546
console.log(anotherNum.toPrecision(4));


const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));




// +++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++
// Maths is defult library in js



// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// E: 2.718281828459045 
// LN2: 0.6931471805599453
// LN10: 2.302585092994046
// LOG2E: 1.4426950408889634
// LOG10E: 0.4342944819032518
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951
// abs: ƒ abs()
// acos: ƒ acos()
// acosh: ƒ acosh()
// asin: ƒ asin()
// asinh: ƒ asinh()
// atan: ƒ atan()
// atan2: ƒ atan2()
// atanh: ƒ atanh()
// cbrt: ƒ cbrt()
// ceil: ƒ ceil()
// clz32: ƒ clz32()
// cos: ƒ cos()
// cosh: ƒ cosh()
// exp: ƒ exp()
// expm1: ƒ expm1()
// floor: ƒ floor()
// fround: ƒ fround()
// hypot: ƒ hypot()
// imul: ƒ imul()
// log: ƒ log()
// log1p: ƒ log1p()
// log2: ƒ log2()
// log10: ƒ log10()
// max: ƒ max()
// min: ƒ min()
// pow: ƒ pow()
// random: ƒ random()
// round: ƒ round()
// sign: ƒ sign()
// sin: ƒ sin()
// sinh: ƒ sinh()
// sqrt: ƒ sqrt()
// tan: ƒ tan()
// tanh: ƒ tanh()
// trunc: ƒ trunc()
// Symbol(Symbol.toStringTag): "Math"
// [[Prototype]]: Object



console.log(`\n\n \t\tMaths Library `)
console.log(Math)
console.log(Math.abs(-5))           // returns absolute value

console.log(Math.round(4.4))        //  regular rounding
console.log(Math.round(4.5))
console.log(Math.round(4.6))

console.log(Math.ceil(3.5))         // rounding off to upper value
console.log(Math.floor(3.5))         // rounding off to lower value

console.log(Math.min(3,4,5,7,8,7));
console.log(Math.max(45,92,3,4,5,7,8,7));

console.log(Math.random());

console.log(`\n Getting values in range 1 to 10 :`);
console.log(Math.random()*10); // Multiplying by 10 to random fun in order to shift on decimal point back to get unique value
console.log((Math.random()*10) + 1); // inorder to avoid value 0.01 we are adding 1 to it
console.log(Math.floor((Math.random()*10)) + 1); // inorder to avoid value 0.01 we are adding 1 to it


console.log(` \n Getting values in range 10 to 20 :`);
const min = 10
const max = 20
console.log(Math.random()*(max-min+1)+min)
console.log(Math.floor(Math.random()*(max-min+1))+min)





