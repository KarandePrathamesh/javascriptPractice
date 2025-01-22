
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["flash", "batman", "superman"]

//  Methods of concating Arrays

// 1. push()  method-->(not more efficient method)

// marvel_heros.push(dc_heros)     // this will results in array within array
console.log(marvel_heros);
console.log(marvel_heros[2]);      // spiderman
console.log(marvel_heros[2][1]);    // p
// console.log(marvel_heros[3][1]);    // flash
console.log(`\n\n`);


// 2. concat() method-->(efficient in case of only 1 array is to be concatinatd )

const all_heros = marvel_heros.concat(dc_heros)       // this will results in array within array --> same as the push method
console.log(all_heros);
console.log(`\n\n`);

// 3. Spread Operator--> (efficient for all the cases)
// ...arrname 
const all_new_heros = [...dc_heros, ...marvel_heros,]
console.log(all_new_heros);
console.log(`\n\n`);



// 4. flat() method --> (solving any dimenstional array at any depth)
const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,[2,4,6,8],13,14],15]]
const real_another_array = another_array.flat(1)         // it solves the array at any depth provided
console.log(real_another_array);
console.log(another_array.flat(Infinity));
console.log(`\n\n`);


// **** Array Methods ****
console.log(Array.isArray("prathamesh"));       // isArray() --> checks whether it is array or not
console.log(Array.from("prathamesh"));       // from() --> converts its arg into array
console.log(Array.from({name:"Prathamesh"}));       // interesting case from interview perspective

let score1 =100
let score2 =200
let score3 =300
let score4 =400
console.log(Array.of(score1, score2, score3, score4));           // Returns a new array from a set of elements.



