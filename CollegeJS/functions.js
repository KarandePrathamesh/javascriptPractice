// Functions

// A. Passing Function as a parameter
function greet(){
    return "Hello...."
}

function myfun(user, func){
    message = func()
    console.log(`${message}  ${user}`)
}

myfun('onkar',greet)
myfun('prashasti',greet)
myfun('pranita',greet)
myfun('Prathamesh',greet)

// for (let i = 0; i < 10; i++) {
//     setTimeout(greet,2000*i)    
// }