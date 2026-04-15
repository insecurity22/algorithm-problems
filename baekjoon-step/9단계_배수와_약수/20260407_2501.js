/** 6 3 */

const fileSystem = require("fs");
const [n, k] = fileSystem.readFileSync("input.txt").toString().split(" ").map(Number);

// K번째 약수만 필요하기 때문에 정렬을 굳이할 필요가 없다. 
// - count로 바로 K번째를 구하면 최적화, 메모리 적게 사용.
let count = 0;
let result = 0;
for(let i = 1; i <= n; i++) {
  const isDivisor = n % i === 0;
  if(isDivisor) { // i가 n의 약수
    count++;
    if(count === k) { // K번째 약수 찾기
      result = i;
      break;
    }
  }
}
console.log(result);

// 약수 찾기: 약수 찾는 1부터 n까지 모든 수를 확인하기 때문에 시간복잡도가 O(n)
// 정렬: 약수 개수만큼 정렬도 최악 O(n log n)
// 총합: O(n + m log m) = O(n log n)
// let factorArr = [];
// for(let i = 1; i <= n; i++) {
//   const isDivisor = n % i === 0;
//   if(isDivisor) {
//     factorArr.push(i);
//   }
// }
// console.log(factorArr.sort((a, b) => a - b)[k - 1] || 0);