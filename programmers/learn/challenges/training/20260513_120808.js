function solution(numer1, denom1, numer2, denom2) {
    const numer = (numer1 * denom2) + (numer2 * denom1);
    const denom = denom1 * denom2;
    
    let max = Math.max(numer, denom); // 10
    let min = Math.min(numer, denom); // 8

    while(min !== 0) { // 유클리드 호제법
        let temp = max % min;
        max = min;
        min = temp;
    }
    
    return [(numer / max), (denom / max)];
}

// 유클리드 호제법으로 최대공약수 계산
// 큰 수와 작은 수를 미리 구분하지 않아도,
// [a, b] = [b, a % b] 과정에서 자동으로 값이 교체되며 계산된다.
// 예: 8 % 10 = 8 → (10, 8) → 10 % 8 = 2 → (8, 2) → 8 % 2 = 0
// const gcd = (a, b) => {
//     while (b !== 0) {
//         [a, b] = [b, a % b];
//     }
//     return a;
// };
// const g = gcd(numer, denom);
// return [numer / g, denom / g];