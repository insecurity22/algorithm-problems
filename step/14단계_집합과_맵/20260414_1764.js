/**
 * 3 4
 * ohhenrie
 * charlie
 * baesangwook
 * obama
 * baesangwook
 * ohhenrie
 * clinton
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M
const [N, M] = input[0].split(' ').map(Number);

const nList = new Set(input.slice(1, N + 1));
const mList = input.slice(N + 1, N + M + 1);

const result = [];
for(item of mList) { // 교집합
    if(nList.has(item)) {
        result.push(item);
    }
}
result.sort();
console.log(result.length);
console.log(result.join("\n"));