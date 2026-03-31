/**
 * 10 5
 * 1 10 4 9 2 3 8 5 7 6
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n');

const [N, X] = inputArr[0].split(' ').map(Number);
const A = inputArr[1].split(' ');

const aArr = [];
for(let i = 0; i < N; i++) {
    if(A[i] < X) {
        aArr.push(A[i]);
    }
}
console.log(aArr.join(' '));