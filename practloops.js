// Loop through all numbers from 1 to 100.

for (let i = 1; i <= 100; i++) {
    console.log(i)
}

// If a number is divisible by 3, log “Fizz.”

let fizz = "fizz"
for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0)
        console.log(fizz)
}

// If a number is divisible by 5, log “Buzz.”

let buzz = "buzz"
for (let i = 5; i <= 100; i++) {
    if (i % 5 === 0)
        console.log(buzz)
}

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

let num = "FizzBuzz"
for (let i = 5; i <= 100; i++) {
    if ([i] % 5 === 0 || [i] % 3 === 0)
        console.log(num)
    else ([i] % 5 !== 0 || [i] % 3 !== 0)
    console.log(i)
}

// part 2: 

let n = 4;
let numToFind= n + 1;
let findPrime = false;


while (!findPrime) {
    // Assume the number is prime
    let isPrime = true;


    for (let i = 2; i < numToFind; i++) {
        if (numToFind % i === 0) {
            // not prime if divisible
            isPrime = false;
            break;
        }
    }

    // if not prime
    if (isPrime) {
        console.log(`The next prime number after ${n} is ${numToFind}`);
        findPrime = true;
    } else {
        // check the next number if not prime
        numToFind++;
    }
}
