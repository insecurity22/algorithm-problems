/**
 * 10
 * 6 3 2 10 10 10 -10 -10 7 3
 * 8
 * 10 9 -5 2 3 4 5 -10
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 상근이가 가지고 있는 숫자 카드
const nCount = Number(input[0]);
const nCardList = input[1].split(' ').map(Number);

// 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야할 정수
const mCount = Number(input[2]);
const mCardList = input[3].split(' ').map(Number);

const cardMap = new Map();
for(card of nCardList) {
    cardMap.set(card, (cardMap.get(card) || 0) + 1);
}

const result = mCardList.map((card) => cardMap.get(card) || 0);
console.log(result.join(" "));

// 전체 시간복잡도: O(N) + O(M) = O(N + M)