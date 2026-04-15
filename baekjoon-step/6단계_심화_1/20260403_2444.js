/**
 * 5
 */

const fileSystem = require('fs');

// 2 * N(5) - 1 = 9번째 줄까지 차례대로 별을 출력한다.
const N = Number(fileSystem.readFileSync(0).toString());

// 공백 4, 별 1
// 공백 3, 별 3
// 공백 2, 별 5
// 공백 1, 별 7
for(let i = 1; i < N; i++) {
    let spaces = " ".repeat(N - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
}

// 공백 0, 별 9
// 공백 1, 별 7
// 공백 2, 별 5
// 공백 3, 별 3
// 공백 4, 별 1
for(let i = N; i > 0; i--) {
    let spaces = " ".repeat(N - i);
    let stars = "*".repeat(i * 2 - 1);
    console.log(spaces + stars);
}