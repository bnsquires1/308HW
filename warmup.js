// ===========================================================
// Prompt:
// - Write a function named charCount that accepts a single string argument and 
//   returns an object that represents the count of each character in the string.
// - The returned object should have keys representing the character with its 
//   value set to the number of times the character appears in the string argument.
// - Upper and lower case characters should be counted separately.
// - Space characters should be counted too.
// Examples:
// charCount('hello') 
// //=> { h: 1, e: 1, l: 2, o: 1 }
// charCount('Today is fantastic!') 
// //=> { 
//   T: 1, 
//   o: 1, 
//   d: 1, 
//   a: 3, 
//   y: 1, 
//   ' ': 2, 
//   i: 2, 
//   s: 2, 
//   f: 1, 
//   n: 1, 
//   t: 2, 
//   c: 1, 
//   '!': 1 
// }
// ===========================================================

// Prompt:
// - Write a function called reverseUpcaseString that accepts a single string 
//   argument, then returns the string with its characters in reverse order and
//   converts all characters to uppercase.

// Examples:

// reverseUpcaseString("SEI Rocks!") //=> "!SKCOR IES" 
// ===========================================================

function charCount(str) {
    let a = str.split("");
    let obj = {};
    a.forEach(function (s) {
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (s == a[j]) {
                count += 1;
            }
            obj[s] = count;
        }
    });
    return obj;
}
console.log(charCount('hello'));




function reverseUpcaseString(singleString) {
    const reversedString = singleString.split("").reverse("").join("").toUppercase("")
}

