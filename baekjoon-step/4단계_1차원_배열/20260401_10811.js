/**
 * 5 4
 * 1 2
 * 3 4
 * 1 4
 * 2 2
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n');

// 바구니 총 개수 N, 줄 개수 M
const [N, M] = inputArr[0].split(' ').map(Number);

const basketArr = Array.from({ length: N }).map((_, i) => i + 1);
for(let mIndex = 1; mIndex <= M; mIndex++) {
    let [i, j] = inputArr[mIndex].split(' ').map((v) => Number(v - 1));

    while(i < j) {
        [basketArr[i], basketArr[j]] = [basketArr[j], basketArr[i]];
        i++;
        j--;
    }
}
console.log(basketArr.join(' '));

// 1 2 3 4 5
// [2 1] 3 4 5 -> 1 2
// 2 1 [4 3] 5 -> 3 4
// [3 4 1 2] 5 -> 1 4
// 3 [4] 1 2 5 -> 2 2
