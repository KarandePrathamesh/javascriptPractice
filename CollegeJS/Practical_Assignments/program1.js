// Create a function to Print prime numbers in an interval of 10 to 50

function printPrimeNumbers(start,end){
    for(let i = start; i<=end; i++){
        let isPrime = true
        for (let j = 2; j < i/2; j++) {
            if(i%j==0){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(`${i}`);        
        }
    }    
}

printPrimeNumbers(10,50)

