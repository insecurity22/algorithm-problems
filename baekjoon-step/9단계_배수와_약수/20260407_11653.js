/**
 * 72
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync("./input.txt").toString().trim();
let N = Number(input);

for (let i = 2; i <= N; i++) {
  // 2부터 나누면서 나눠질 때까지
  while (N % i === 0) {
    N = N / i;
    console.log(i);
  }
}

// 1. `while (N % i === 0)`는 매 반복마다 조건을 다시 계산하니, N이 바뀌면 조건 결과도 같이 바뀐다.
// 2. 반대로 `let isDivisor = (N % i === 0)`처럼 변수로 빼면, 값을 갱신하기 전까지는 N이 바뀌어도 isDivisor 값이 그대로라 주의해야 한다.
// let isDivisor = N % i === 0;
// while (isDivisor) {
//     N = N / i;
//     isDivisor = N % i === 0; // ← 변수로 뺐다면, 루프 안에서 다시 계산해 갱신해야 한다.
// }
