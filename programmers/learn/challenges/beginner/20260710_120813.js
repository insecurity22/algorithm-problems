function solution(n) {
    let result = [];
    for(let i = 1; i <= n; i+=2) {
        result.push(i);
    }
    return result;
}

// 1. for문 사용
// - 홀수만 생성하므로 불필요한 배열 생성과 필터링 과정이 없다.

// 2. Array.from 사용
// - 1부터 n까지의 배열을 생성한 뒤 홀수만 필터링한다.
// return Array.from({ length: n }, (_, i) => i + 1).filter(i => i % 2 !== 0);
// return Array(n).fill(1).map((v, i) => v + i).filter(v => v % 2 === 1);