/**
 * 3 5
 * 1 2 4
 * 2 3 4 5 6
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 집합 A와 B
const [ALength, BLength] = input[0].split(' ').map(Number);
const A = new Set(input[1].split(' ').map(Number));
const B = new Set(input[2].split(' ').map(Number));

// 교집합
let intersectionCount = 0;
for(let a of A) {
    if(B.has(a)) {
        intersectionCount++;
    }
}
console.log(ALength + BLength - (intersectionCount * 2));

// delete를 사용해도 시간복잡도는 같지만,
// 해시 테이블 수정이 반복되며 내부적으로 재조정과 메모리 변경이 발생해 단순 조회보다 실제 연산 비용이 더 크다.