/**
 * 60
 * 100
 */

const fileSystem = require("fs");
const [M, N] = fileSystem.readFileSync('./input.txt').toString().split('\n').map(Number);

function isPrime(number) {
    if(number < 2) return false;

    for(let i = 2; i * i <= number; i++) {
        const isDivisor = number % i === 0;
        if(isDivisor) {
            return false;
        }
    }
    return true;
}

let sum = 0;
let min = 0;
for(let number = M; number <= N; number++) {
    if(isPrime(number)) {
        sum += number;
        if(min === 0) min = number;
    }
}

if(sum === 0) {
    console.log("-1");
} else {
    console.log(sum);
    console.log(min);
}