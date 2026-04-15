/**
 * 4
 * 1 3 5 7
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync('./input.txt').toString().split("\n");

const numberCount = Number(input[0]);
const numberArr = input[1].split(" ").map(Number);

function isPrime(number) {
    if(number < 2) return false; // 0,1은 소수가 아니라 제외

    for(let i = 2; i * i <= number; i++) {
        const isDivisor = number % i === 0;
        if(isDivisor) {
            return false;
        }
    }
    return true;
}

let primeCount = 0;
for(let i = 0; i < numberCount; i++) {
    if(isPrime(numberArr[i])) primeCount++;
}
console.log(primeCount);

/*
 * [초기 코드에 대한 조언]
 * ==========================================
 * let primeCount = 0;
 * for (let i = 0; i < numberCount; i++) {
 *   let divisorCount = 0;
 *   const number = numberArr[i];
 *   for (let j = 0; j < number; j++) {
 *     if (number % j === 0) divisorCount++;
 *   }
 *   if (divisorCount === 1) primeCount++;
 * }
 * console.log(primeCount);
 * ==========================================
 *
 * 1) 0과 1은 소수가 아니므로 제외합니다.
 * 
 * 2) 약수를 0이나 1로 나눌 필요가 없습니다.
 * 
 * 3) 소수는 약수가 없다는 뜻이므로 약수로 나누어떨어지는 수가 하나라도 나오면 합성수이므로 즉시 false 반환 가능하여, 약수의 개수를 세지 않아도 됩니다. 
 * 
 * 4) 0으로 나머지를 구하는 연산(`% 0`)은 수학적으로 정의되지 않으며, NaN을 반환합니다.
 *
 * 5) 반복 횟수를 줄이기 위해 제곱근을 활용합니다.
 * — `i < number` 대신 `i * i <= number`를 사용하면 됩니다. (즉 i ≤ √n)
 *   - 반복 횟수가 줄어들어 속도가 훨씬 빨라지고, 수가 커질수록 효율 차이가 커집니다.
 * - 예를 들어 n = 36일 때:
 *   - `j < number` → j = 2,3,…,35 → 34번 반복
 *   - `j * j <= number` → j = 2,3,4,5,6 → 5번 반복
 * - 약수는 쌍으로 존재하므로, 2,3,4,6인 작은 쪽만 확인하면 큰 쪽은 자동으로 판별됩니다. (√36 = 6까지만 확인하면)
 *   - 약수 쌍 예시(작은 약수, 큰 약수): (1×36), (2×18), (3×12), (4×9), (6×6)
 * 
 * 6) `isPrime`처럼 소수 판별을 함수로 만들면 
 * - 코드가 읽기 편하고
 * - 다른 문제에서도 재사용이 쉽습니다.
 */