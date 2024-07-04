// 4. Datatypes in javascript (data types denotes the type of data we are storing in variables)
    
// 1. primitive datatypes -->undefined, null, number, string, boolean, symbol, 
    // integer
    var num = 10;       

    // floating point
    var deci = 12.50;

    // string
    var str = "prathamesh"; 

    // boolean
    var bool1 = true;
    var bool2 = false;

    // undefined
    // var und = undefined;
    var und;

    // null 
    var n = null;

    console.log(`the number is : ${num}`);
    console.log(typeof(num));
    console.log(deci);
    console.log(typeof(deci));
    console.log(str);
    console.log(typeof(str));
    console.log(bool1);
    console.log(bool2);
    console.log(typeof(bool2));
    console.log(und);
    console.log(typeof(und));



// 2. non-primitive datatypes/reference datatypes

    // array
    var arr = [1,2,3,4,"prahamesh",,,];

    // object
    var obj ={          
        prathamesh: 80,
        onkar: 40,
        rohan: 56
    }


    console.log(arr);
    console.log(obj);



    /* difference between var, let  and const*/
    // 1. var -- > * var can store any kind of data value 
                // * var has scope out of the block 
                // * it  cannot be used in modern javascript

    // 2. let -- > * let can also store any kind of data value
                // * let has scope inside within the block
                // * it can be used in modern javascript

    // 3. const > * const is runtime constant 
               // * runtime constant means that it can be assigned at runtime or initialized when it is declared
               // * it can be initialized once in program

var a =10;
console.log(a);
a=20;
console.log(a);


let b = 20;
console.log(b);
b=30;
console.log(b);
b="prthamesh";
console.log(b);


const pi = 3.14;
// pi=3.14; not allowed here
// pi++; not allowed 
console.log(pi);