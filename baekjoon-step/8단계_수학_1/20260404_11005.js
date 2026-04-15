/**
 * 60466175 36
 */

const fileSystem = require('fs');
const [N, base] = fileSystem.readFileSync(0).toString().trim().split(' ').map(Number);

let num = N;
let result = '';
while(num > 0) {
    const remainder = num % base;
    if(remainder < 10) {
        result += remainder;
    } else {
        // A 10, B 11, ..., 
        result += String.fromCharCode(remainder + 'A'.charCodeAt(0) - 10) ;
    }

    num = Math.floor(num / base);
}
console.log(result.split('').reverse().join(''));

// 간단하게
// console.log(N.toString(base).toUpperCase());

// N = 10, base = 2  (10을 2진법으로)
// 1) 10 ÷ 2 = 5 ... 0
// 2) 5 ÷ 2 = 2 ... 1
// 3) 2 ÷ 2 = 1 ... 0
// 4) 1 ÷ 2 = 0 ... 1
// 0 → 1 → 0 → 1 → reverse → 1010

// N = 60466175, base = 36  (60466175를 36진법으로)
// 1) 60466175 ÷ 36 = 1679615 ... 35 (Z)
// 2) 1679615 ÷ 36 = 46655 ... 35 (Z)
// 3) 46655 ÷ 36 = 1295 ... 35 (Z)
// 4) 1295 ÷ 36 = 35 ... 35 (Z)
// 5) 35 ÷ 36 = 0 ... 35 (Z)
// Z → Z → Z → Z → Z → reverse → ZZZZZ