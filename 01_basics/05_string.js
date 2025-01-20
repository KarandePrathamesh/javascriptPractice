// there are 3 ways to declare a string
//      a. String fName = "onkar"
//      b. const user_name = "Prathamesh "
//      c. const gameName = new String()



const user_name = "Prathamesh "

const repoCount = 14


//  this is out dated syntax for concatinating strings
// console.log(name+ repoCount +" I'v only this number of repo count");


// Modern Way to concatenate a string
//  Using ``-->Bactics--> By doing string interpolation
console.log(`Hello my name is ${user_name.toUpperCase()} and my repo count is ${repoCount}`);


const gameName = new String("Flappy-Bird")


console.log(gameName[0]);           // F
console.log(gameName.__proto__);    // {} empty object
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2));
console.log(`The length is : ${gameName.length}`);
console.log(gameName.indexOf('a'));

const startGmNM = gameName.substring(0,4)
console.log(startGmNM);


// const anotherGmNm = gameName.slice(0,4)
const anotherGmNm = gameName.slice(-8,4)
console.log(anotherGmNm);
console.log(gameName.trim());

const url =  'https://prathamesh%20karande.com';
console.log(url)

console.log(`replacing by another values : ${url.replace('%20', '-')}`);

console.log(url.includes('prathamesh'));
console.log(url.includes('Mandar'));


console.log(gameName.split('-'));



















/**
 * Prathamesh_Karande
 * String Methods
 */

// String {'FlappyBird'}
// 0: "F"
// 1: "l"
// 2: "a"
// 3: "p"
// 4: "p"
// 5: "y"
// 6: "B"
// 7: "i"
// 8: "r"
// 9: "d"
// length: 10
// [[Prototype]]: String
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]:Object
// [[PrimitiveValue]]:""
// [[PrimitiveValue]]:"FlappyBird"