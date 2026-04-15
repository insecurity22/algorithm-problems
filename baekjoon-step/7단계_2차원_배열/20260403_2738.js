/**
 * 3 3
 * 1 1 1
 * 2 2 2
 * 0 1 0
 * 3 3 3
 * 4 4 4
 * 5 5 100
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 행, 열의 크기
const [N, _] = input[0].split(' ').map(Number);

let result = [];
for(let i = 1; i <= N; i++) {
    const A = input[i].split(' ').map(Number); // [1, 2, 3]
    const B = input[i + N].split(' ').map(Number); // [4, 5, 6]
   
    console.log(A.map((v, vIndex) => v + B[vIndex]).join(" "));
}
console.log(result.join(" "));

// 3 3
// =======
// 1 1 1
// 2 2 2
// 0 1 0
// =======
// 3 3 3
// 4 4 4
// 5 5 100
// =======
// 4 4 4
// 6 6 6
// 5 6 100