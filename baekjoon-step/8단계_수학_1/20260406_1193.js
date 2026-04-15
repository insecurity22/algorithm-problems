/**
 * 1
 */

const fileSystem = require("fs");
const X = Number(fileSystem.readFileSync(0).toString().trim());

let max = 0; // X가 위치한 줄의 마지막 번호
let line = 0; // X 위치한 개수
while (max < X) {
  line++;
  max += line;
}

let numerator, denominator;
const offset = max - X;
const isEvenNumber = line % 2 === 0;
if (isEvenNumber) {
  numerator = line - offset;
  denominator = offset + 1;
} else {
  numerator = offset + 1;
  denominator = line - offset;
}
console.log(`${numerator}/${denominator}`);

// X = 4
// (line) min-max
// (1) 1: 1/1
// (2) 2-3: 1/2, 2/1
// (3) '4'-6: 3/1, 2/2, 1/3
// (4) 7-10: 1/4, 2/3, 3/2, 4/1
// (5) 11-15: 5/1, 4/2, 3/3, 2/4, 1/5

// 1) 불필요하게 모든 분수를 배열에 저장하고 있다.
// - X 최대값: 10,000,000으로 수천만~억 단위 데이터면 메모리가 터진다.
// - 우리는 X번째 값 하나기 때문에 쌓지 말고 바로 계산해야한다...
// let min = 0;
// let max = 0;
// let line = 1;
// const arr = [];
// while (X > max) {
//     max = max + line;
//     min = max - line + 1;
//     line++;
//     for(let i = 1; i < line; i++) {
//         arr.push(`${i}/${line - i}`);
//     }
// }
// console.log(arr[line + 1]);
