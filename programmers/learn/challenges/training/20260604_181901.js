function solution(n, k) {
    const result = [];
    for(let i = k; i <= n; i = i + k) {
        result.push(i);
    }
    return result;
}

// 1. i += k로 간단하게.