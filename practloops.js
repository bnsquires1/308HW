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


for (let i = 1; i <= 100; i++) {
    if ([i] % 5 === 0 || [i] % 3 === 0)
        console.log("FizzBuzz")
    else if (i % 5 == 0) {
        console.log("Buzz")
        i % 3 !== 0 {
            console.log("Fizz")
        }
        console.log(i)
    }

    // part 2: 

    let n = 4;
    let numToFind = n + 1;
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

    //Josh's Solution Pt2

    let n = 73
    let foundPrime = false
    let i = n + 1
    let nextPrime;

    outerLoop: while (!foundPrime) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                // this is nt a prime number because it was divisible
                i++
                continue outerLoop
            }
        }
        // If I get to this line of the while loop, you have found a prime number
        nextPrime = i
        foundPrime = true
    }

    console.log(nextPrime)

    // Part 3 - Feeling Loopy Josh's Solution

    let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57"

    let cell1 = ""
    let cell2 = ""
    let cell3 = ""
    let cell4 = ""
    let cell = 1

    for (let i = 0; i < csvStr.length; i++) {

        if (csvStr[i] === `,`) {
            cell++

        }
        switch (cell) {
            case 1:
                cell1 += csvStr[i]
                break
            case 2:
                cell2 += csvStr[i]
                break
            case 3:
                cell3 += csvStr[i]
                break

            case 4:
                cell4 += csvStr[i]
                break
        }

        if (cell === 4 && csv[i + 1] === `\n` || i + 1 === csvStr.length) {
            console.log(cell1, cell2, cell3, cell4);
        }
    }
