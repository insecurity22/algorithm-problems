/**
 * 2000
 */

const fileSystem = require('fs');
const year = parseInt(fileSystem.readFileSync(0).toString().split(' '));
const isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

if(isLeapYear) {
    console.log("1");
} else {
    console.log("0");
}