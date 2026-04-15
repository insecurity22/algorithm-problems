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
const input = fileSystem.readFileSync(0).toString().split('\n');

const x = Number(input[0]);
const y = Number(input[1]);

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
