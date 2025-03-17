'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    s = s.toLowerCase();
    // vowels loop
    const vowels = "aeiou";
    
    // // vowels loop
    // for (const char of s) {
    //     if (vowels.includes(char)) {
    //         console.log(char);
    //     }
    // }

    // // constants loop
    // for (const char of s) {
    //     if (!vowels.includes(char) && char >= "a" && char <= "z") {
    //         console.log(char);
    //     }
    // }
    
    /* ************************************** */
    const vowelsList = [];
    const consonantsList = [];

    for (const char of s) {
        if (vowels.includes(char)) {
            vowelsList.push(char);
        } else if (char >= "a" && char <= "z") {
            consonantsList.push(char);
        }
    }

    console.log(vowelsList.join("\n"));
    console.log(consonantsList.join("\n"));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
