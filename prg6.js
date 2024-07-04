// 10. Array methods:  

let arr = ["prathamesh", "karande", 45, null, true];  // array can consists any kind of data

// 1. length --> (return the length of array)
console.log(arr.length);

// 2. pop() --> (removes one element from the end of array)
arr.pop();
console.log(arr);

// 3. push() --> (adds one element to the end of array)
arr.push("harry");
console.log(arr);

// 4. shift() --> (removes one element from the start of array)
arr.shift();
console.log(arr);

// 5. unshift() --> (adds one element to the start of array) (also return new length of array)
arr.unshift("nilesh");
console.log(arr);

const newLen = arr.unshift("hello");
console.log(newLen);

// 6. toString() --> (converts all array into one string)
let arrStr = arr.toString();
console.log(arrStr);

// 7. sort() --> (sorts all array elements in alphabetically or in dictionary wise)
let arrsort = arr.sort();
console.log(arrsort);