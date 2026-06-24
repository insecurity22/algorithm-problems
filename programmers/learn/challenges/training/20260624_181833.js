function solution(n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = [];
        for(let j = 0; j < n; j++) {
            arr[i][j] = +(i === j);
        }
    }
    return arr;
}

// 1. 아래처럼 간단하게도 풀이 가능
// return Array(n).fill().map((_, i) => Array(n).fill().map(($, j) => i === j ? 1 : 0));