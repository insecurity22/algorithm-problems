const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const a = Number(input[0]);
    const b = Number(input[1]);
    console.log(`${a} + ${b} = ${a + b}`);
});

// 1. 더 간단한 방법
// rl.on('line', function (line) {
//     [a, b] = line.split(' ').map(Number);
// }).on('close', function () {
//     console.log(`${a} + ${b} = ${a + b}`);
// });