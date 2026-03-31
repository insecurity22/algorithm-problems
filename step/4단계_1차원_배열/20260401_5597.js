const fileSystem = require('fs');

const STUDENT_COUNT = 30;
const submitted = fileSystem.readFileSync(0).toString().trim().split('\n').map(Number);
const submittedSet = new Set(submitted);

const nonSubmitters = []
for(let i = 1; i <= STUDENT_COUNT; i++) {
    if(!submittedSet.has(i)) nonSubmitters.push(i);
}
console.log(nonSubmitters.join(' '));

// includes는 배열을 처음부터 끝까지 순회해서 값이 있는지 찾는 O(n), Set.has()는 O(1)
// - for문 안에서 매번 호출하면 30 * 28 = 840번 비교로 배열이 커지면 비효율적이다.
// 
// for(let i = 1; i <= STUDENT_COUNT; i++) {
//     if(!submitted.includes(i)) nonSubmitters.push(i);
// }
// console.log(nonSubmitters.join(' '));