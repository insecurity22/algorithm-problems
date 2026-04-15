/**
 * 2 1 5
 */

const fileSystem = require('fs');
const [A, B, V] = fileSystem.readFileSync(0).toString().trim().split(' ').map(Number);

// 나무 높이: V
// 낮에 올라가는 높이: A
// 밤에 미끄러지는 높이: B
// (V - B) = 마지막 날 전까지 올라야 하는 높이 / (A - B) = 하루 순수 상승량
const days = Math.ceil((V - B) / (A - B));
console.log(days);

// 일: A → B → 결과
// 1일: 0 + 2 = 2 → 밤 미끄럼 → 2 - 1 = 1
// 2일: 1 + 2 = 3 → 밤 미끄럼 → 3 - 1 = 2
// 3일: 2 + 2 = 4 → 밤 미끄럼 → 4 - 1 = 3
// 4일: 3 + 2 = 5 → 정상 도달

// 1) 1일 단위로 시뮬레이션하고 있어, V가 최대 1,000,000,000일 때, 반복문이 수억 번 이상 실행된다.
// 즉, 문제의 최대 입력 범위를 고려하면 완전 비효율적이다. 하루마다 더하고 빼는 과정을 반복하기 때문.
// let sum = 0;
// let day = 0;
// while(sum < V) {
//     sum += A;
//     if(sum !== V) {
//         sum -= B;
//     }
//     day++;
// }
// console.log(day);