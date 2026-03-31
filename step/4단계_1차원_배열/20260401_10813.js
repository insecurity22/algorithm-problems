/**
 * 5 4
 * 1 2
 * 3 4
 * 1 4
 * 2 2
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n');

// 바구니 개수 N, 공을 바꿀 개수 M
const [N, M] = inputArr[0].split(' ').map(Number);
const basketArr = Array.from({ length: N }, (_, i) => i + 1);

for(let mIndex = 1; mIndex <= M; mIndex++) {
    const [first, second] = inputArr[mIndex].split(' ').map((v) => Number(v - 1));
    [basketArr[first], basketArr[second]] = [basketArr[second], basketArr[first]];
}
console.log(basketArr.join(' '));