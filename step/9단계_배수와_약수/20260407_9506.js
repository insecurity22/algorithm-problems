/**
 * 6
 * 12
 * 28
 * -1
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync('./input.txt').toString().split("\n").map(Number);

for(let i = 0; i < input.length; i++) {
    const n = input[i];
    if(n === -1) break;

    let sum = 0;
    let divisorArr = [];
    for(let j = 1; j < n; j++) {
        const isDivisor = n % j === 0;
        if(isDivisor) {
            sum += j;
            divisorArr.push(j);
        }
    }

    const isPerfectNumber = sum === n;
    if(isPerfectNumber) {
        console.log(`${n} = ${divisorArr.join(" + ")}`);
    } else {
        console.log(`${n} is NOT perfect.`)
    }
}

// reduce는 배열의 각 원소마다 콜백 함수가 호출되기 때문에 작은 배열에서는 차이가 거의 없지만, 큰 배열에서는 반복문 + sum 변수를 사용하는 게 더 효율적이다.
// divisorArr.reduce((acc, curr) => acc + curr, 0) === n;