// 11. String Methods in javascript:
let str = "prathamesh karande is a good boy ";


// 1. length : (return length of string with spaces)
console.log(str.length);

// 2. indexOf(): (return the index of string provided in the parenthesis from first)
console.log(str.indexOf("good"));

// 3. lastIndexOf() : (return the index of string provided in the parenthesis from last)
console.log(str.lastIndexOf("prathamesh"));

// 4. slice() : (return the sliced string using indexing)
console.log(str.slice(0,5));
console.log(str.slice(0,10));

// 5. replace() : (replaces the current text by provided text) /(replaces only first occurence)
console.log(str.replace("prathamesh", "nilesh"));