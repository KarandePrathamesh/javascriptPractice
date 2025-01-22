

// =========================== Arrays ============================

// array = object 
// collection of multiple values in a single variable
// JS arrays are resizable 
// contains mix data types
// JS Arrays are non associative arrays
// zero -  indexed

const myArr = [0,1,2,3,4,5]
console.log(myArr[3]);

const myHeros = ["shaktiman", "naagraj"]
console.log(myHeros[1]);

const myArr2 = new Array(1,2,4,5,6)


myArr.push(6)
myArr.push(7)
myArr.push(8)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(92)       // add one value at the start of the array
myArr.unshift(45)       // this method takes more time to execute if data is more
myArr.unshift(35)
console.log(myArr)

myArr.shift()       // removes one value from the beginning of the array
console.log(myArr)

console.log(`\n .includes() --> checks if the value is in the array or not : ${myArr.includes(92)}`)
console.log(`\n .indexOf() --> return index if prensent (if not it will returns --> -1 ): ${myArr.indexOf(2)}`)


const newArr = myArr.join() // ('-')   //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(typeof myArr);   // object 
console.log(newArr);
console.log(typeof newArr);  // string


// ======== slice and splice =========

console.log(`\n original array before slice : ${myArr}`);
const myn1 = myArr.slice(1,3)                   // slice() --> it will only return that values that are sliced
console.log(` after slice : ${myn1}`);
console.log(` original array after slice : ${myArr}`);


const myn2 = myArr.splice(1,3)              // splice() --> it will remove all the data from the orginal array
console.log(`after splice : ${myn2}`);
console.log(`original array after splice ${myArr}`); 



