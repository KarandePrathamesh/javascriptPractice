// 6. functions in javascript :
//  DRY principle --> Don not repeat yourself


// 1.normal function :
function avg(a, b){
    // return (a+b)/2;
    c = (a+b)/2;
    return c;
}

avg1 = avg(4,6);
avg2 = avg(14,16);

console.log(avg1, avg2);



// 2.Arrow function :

sum = (a,b) => a+b;
s1 = sum(4,5);
s2 = sum(23,455);
console.log(s1, " " , s2);