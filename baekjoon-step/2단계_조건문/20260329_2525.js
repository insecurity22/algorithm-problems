/**
 * 1) 
 * 14 30
 * 20
 * = 14 50
 * 
 * 2)
 * 17 40
 * 80
 * = 19 0
 * 
 * 3)
 * 23 48
 * 25
 * = 0 13
 */

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

const fs = require('fs');
const [hour, minute, delayMinutes] = fs.readFileSync(0).toString().trim().split(/\s+/).map((Number));

const resultMinutes = (hour * MINUTES_IN_HOUR + minute + delayMinutes) % MINUTES_IN_DAY;
const resultHour = Math.floor(resultMinutes / MINUTES_IN_HOUR);
const resultMinute = resultMinutes % MINUTES_IN_HOUR;

console.log(resultHour, resultMinute)