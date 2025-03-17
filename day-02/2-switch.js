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

function getLetter(s) {
    // Write your code here
    const firstLetter = s.charAt(0);
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const groupB = new Set(["b", "c", "d", "f", "g"]);
    const groupC = new Set(["h", "j", "k", "l", "m"]);
    
     switch (true) {
        case vowels.has(firstLetter):
            return "A";
        case groupB.has(firstLetter):
            return "B";
        case groupC.has(firstLetter):
            return "C";
        default:
            return "D";
    }
    /* ********************************************* */
    
    // if ("aeiou".includes(firstChar)) return "A";
    // if ("bcdfg".includes(firstChar)) return "B";
    // if ("hjklm".includes(firstChar)) return "C";
    // return "D";
    
    /* ********************************************* */
    // const groups = {
    //     A: "aeiou",
    //     B: "bcdfg",
    //     C: "hjklm",
    //     D: "npqrstvwxyz"
    // };

    // for (const key in groups) {
    //     if (groups[key].includes(firstChar)) {
    //         return key;
    //     }
    // }
    // return null;
    
    /* ********************************************* */

    // const charCode = firstChar.charCodeAt(0);
    // // if (charCode < 102) return "A"; // a-e
    // // if (charCode < 104) return "B"; // b-g
    // // if (charCode < 110) return "C"; // h-m
    // // return "D"; // n-z
    
    /* ********************************************* */
    
    // const firstChar = s.charAt(0);
    // if (/[aeiou]/.test(firstChar)) return "A";
    // if (/[bcdfg]/.test(firstChar)) return "B";
    // if (/[hjklm]/.test(firstChar)) return "C";
    // return "D";

}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
