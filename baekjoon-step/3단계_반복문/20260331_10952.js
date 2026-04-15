/**
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 * 0 0
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

const resultArr = [];
for(let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    
    // EOF(End Of File), 더 이상 입력이 없는 상태로 파일 끝을 나타낸다.
    if(A === 0 && B === 0) {
        break;
    };
    
    resultArr.push(A + B);
}
console.log(resultArr.join('\n'));

// + while문으로도 사용 가능