/**
 * 3
 * 10 20 30
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 과목 개수 N, 시험 성적
const N = Number(input[0]);
const scoreArr = input[1].split(' ').map(Number);

// 최댓값 : const M = Math.max(...scoreArr); 대신..
let M = scoreArr[0];
for(let i = 1; i < N; i++) {
    if(scoreArr[i] > M) M = scoreArr[i];
}

let fakeSum = 0;
for(let i = 0; i < N; i++) {
    fakeSum += (scoreArr[i] / M) * 100;
}
const average = (fakeSum / N).toFixed(2);
console.log(average);