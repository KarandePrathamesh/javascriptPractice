//======================== Dates in JS ============================

let myDate = new Date();
console.log(typeof(Date));
console.log(typeof(myDate));
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(`\nCreating dates in js :`);
const myCreatedDate1 = new Date(2023,0,23)  // months in js always starts with indexing 0
console.log(myCreatedDate1);
console.log(myCreatedDate1.toDateString());

const myCreatedDate2 = new Date(2023,0,23,5,3)  // 5 hours and 3 minutes
console.log(myCreatedDate2.toLocaleString());

const myCreatedDate3 = new Date("2024-01-14")  // yyyy-mm-dd syntax
console.log(myCreatedDate3.toLocaleString());

const myCreatedDate4 = new Date("01-14-2024")  // dd-mm-yyyy syntax
console.log(myCreatedDate4.toLocaleString());



// ========================= Time in Js ============================

console.log(`\n\nTime in js`);

let myTimeStamp = Date.now()
console.log(myTimeStamp);       // result is in miliseconds from date 1 jan 1970
console.log(myCreatedDate4.getTime());

console.log(Date.now());  // miliseconds from 1 jan 1970
console.log(Math.floor(Date.now()/1000));  // seconds --||--


let newDate = new Date()
console.log(`\nCurrent Date : ${newDate}`);
console.log(`Current Day : ${newDate.getDay()}`);
console.log(`Current Date : ${newDate.getDate()}`);
console.log(`Current Month : ${newDate.getMonth()}`);

// `hello world ${newDate.getMonth()}`


// customizing dates in javascript
let custDate = newDate.toLocaleString('defalut',{
    weekday: "long",
})
console.log(`Customized date : ${custDate}`);


