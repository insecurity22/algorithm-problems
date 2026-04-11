/**
 * 4
 * Baha enter
 * Askar enter
 * Baha leave
 * Artem enter
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 로그에 기록된 출입 기록의 수
const n = Number(input[0]);

// 출입 기록
const set = new Set();
for(let i = 1; i <= n; i++) {
    const [name, action] = input[i].split(' ');

    if(action === 'enter') {
        set.add(name);
    } else {
        set.delete(name);
    }
}
const result = Array.from(set).sort().reverse();
console.log(result.join('\n'));