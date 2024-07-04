// 7. Conditional Statements : --> if, if else, if else ladder, switch
    
var age =20;
if (age > 18){
    console.log('able to vote');
}
else{
    console.log('not able to vote');
}


var c = 1;
switch (c) {
    case 1:
        console.log("today is monday")
        break;
    case 2:
        console.log("today is tuesday")
        break;

        case 3:
            console.log("today is wednesday")
            break;

            case 4:
                console.log("today is thursday")
                break;
    default:
        console.log('wrong decision');
        break;
}



// 8. Looping Statement : --> for , for each, for in , for of, while, do while

var arr = [1, 2, 3, 4, "prathamesh"];
// 1. for loop:

// for (let i = 0 ; i < arr.length; i++){ 
//     const element = arr[i];
//     console.log(element);
// }

// 2. for each loop : (used for arrays )

// arr.forEach(element => {
//     console.log(arr[element]);
// });
arr.forEach(
    function(element){
        console.log(element);
    }
);

// 3. while loop : (entry control loop)
var arr1 = ["rohan", "prathamesh", "onkar", "sairaj"];
    let i = 0;
    while (i<arr1.length) {
        console.log(arr1[i]);
        i++;
    }

// 3. do while loop : (exit control loop)
    let j = 0;
     do{
        console.log(arr1[j]);
        j++;
    }while (j<arr1.length);




// 9. Jumpuing Statement : break, continue
var arr = [1, 2, 3, 4, 5, 6, 7];

//break statement: (runs until condition is ture)
for (let i = 0 ; i < arr.length; i++){ 
    const element = arr[i];
    if(arr[i]%5==0)
        break;
    console.log(element);
}
// continue statement:   (skips the current iterations)
for (let i = 0 ; i < arr.length; i++){ 
    const element = arr[i];
    if(arr[i]%5==0)
        continue;   
    console.log(element);
}