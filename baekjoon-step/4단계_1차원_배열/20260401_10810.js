/**
 * 5 4
 * 1 2 3
 * 3 4 4
 * 1 4 1
 * 2 2 2
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n');

// 총 바구니 개수 N, 공을 넣는 횟수 M
const [N, M] = inputArr[0].split(' ').map(Number);
const basketArr = Array(N).fill(0);

// i번 바구니부터 j번 바구니까지 k번 공을 넣는다.
for(let mIndex = 1; mIndex <= M; mIndex++) {
    const [start, end, ball] = inputArr[mIndex].split(' ').map(Number);
    for(let basketIndex = start; basketIndex <= end; basketIndex++) {
        basketArr[basketIndex - 1] = ball;
    }
}
console.log(basketArr.join(' '));

// [RETRO]
// 1. 문제를 머릿속에 명확히 시각화하자.
// 2. 문장의 주어를 잘 살펴보자.
// 3. 사용되지 않는 변수가 있는지 점검하자.
