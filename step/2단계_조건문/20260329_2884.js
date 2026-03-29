/**
 * 1) 10 10
 * = 9 25
 * 
 * 2) 0 30
 * = 23 45
 * 
 * 3) 23 40
 * = 22 55
 */

const ALARM_OFFSET = 45;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

const fileSystem = require('fs');
const [hour, minute] = fileSystem.readFileSync(0).toString().split(' ').map(Number);

let resultMinutes = ((hour * MINUTES_IN_HOUR) + minute) - ALARM_OFFSET;
if(resultMinutes < 0) {
    resultMinutes += HOURS_IN_DAY * MINUTES_IN_HOUR;
}

const resultHour = Math.floor(resultMinutes / MINUTES_IN_HOUR);
const resultMinute = resultMinutes % MINUTES_IN_HOUR;

console.log(resultHour, resultMinute); 