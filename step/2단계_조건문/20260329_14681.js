/**
 * 1)
 * 12
 * 5
 * = 1
 * 
 * 2)
 * 9
 * -13
 * = 4
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./index.txt').toString().split('\n');

const x = parseInt(input[0]);
const y = parseInt(input[1]);

const isPositiveX = x > 0;
const isPositiveY = y > 0;

if(isPositiveX && isPositiveY) {
    console.log("1");
} else if(!isPositiveX && isPositiveY) {
    console.log("2");
} else if(!isPositiveX && !isPositiveY) {
    console.log("3");
} else if(isPositiveX && !isPositiveY) {
    console.log("4");
} 
