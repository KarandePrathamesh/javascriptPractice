
// For Strings:
// const userEmail = "prath@gmail.com"   //case 1 -> value holding string can be considered as truthy value by default
const userEmail = ""                    // case 2 -> empty can be considered as falsy value by default

if(userEmail){
    console.log("Got user email");    // case 1 --> Got user email
}else{
    console.log("Didn't got user email");   // case 2 --> Didn't got user email 
}


// falsy values Examples: 
    // false, 0, -0, BigInt-->0n, "", null, undefined, NaN

// truthy values Examples:
    // true, "0", 'false', "", " ", []-> Array, {}-> Object, function(){}

    // ?? --> Nullish Coalesing operator 
    // con ? ifTrue : ifFalse ; --> ternary operator