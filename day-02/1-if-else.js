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

function getGrade(score) {
    // let grade;
    // if(score >= 0 && score <= 5) {
    //     grade = "F";
    // } else if(score > 5 && score <= 10) {
    //     grade = "E";
    // } else if(score > 10 && score <= 15) {
    //     grade = "D";
    // } else if(score > 15 && score <= 20) {
    //     grade = "C";
    // } else if(score > 20 && score <= 25) {
    //     grade = "B"
    // } else {
    //     grade = "A"
    // }
    // return grade;

    /* ************************************************* */
    
    // let grades = ["F", "E", "D", "C", "B", "A"];
    // return grades[Math.min(Math.floor(score / 5), 5)];
    
    /* ************************************************* */
    
    const gradeMap = {
        0: "F", 1: "E", 2: "D", 3: "C", 4: "B", 5: "A"
    };

    return gradeMap[Math.min(Math.floor(score / 5), 5)];
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
