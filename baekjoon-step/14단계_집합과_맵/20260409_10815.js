/**
 * 5
 * 6 3 2 10 -10
 * 8
 * 10 9 -5 2 3 4 5 -10
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 가지고 있는 숫자 카드의 개수
const N = Number(input[0]);
const nCard = new Set(input[1].split(' ').map(Number));

// 가지고 있는 숫자 카드인지 아닌지를 구해야할 M개의 정수
const M = Number(input[2]);
const mCard = input[3].split(' ').map(Number);

let isHaveArr = [];
for(let i = 0; i < M; i++) {
    isHaveArr.push(nCard.has(mCard[i]) ? 1 : 0);
}
console.log(isHaveArr.join(" "));

// Array.includes()는 선형 탐색(O(N))이라 전체가 O(N*M)이 되어 시간 초과가 납니다.
// - 즉, includes가 느린 이유는 내부적으로 배열을 앞부터 끝까지 하나씩 확인합니다. 한 번 호출 → O(N)
// - 카드 개수 N 500,000, 찾을 숫자 M 500,000라면 includes 1번에 O(N)이고, 이걸 M번 반복하면 O(N * M)이 되고,
//   최악의 경우 500,000 * 500,000 = 2500억 번으로, "리스트를 매번 처음부터 찾아" 절대 시간 내에 끝내지 못한다.

// 결과적으로 Set에 저장 후 Set.has()로 존재 여부를 체크하면 시간 복잡도가 O(N + M) 된다.
// - Set.has()는 평균 시간 O(1), 전체 O(N+M)으로, 약 500,000 + 500,000 = 1,000,000이 되며, "해시로 바로 찾기 때문에" 매우 빠르다.