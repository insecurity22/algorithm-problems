function solution(a, b) {
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
}

// 1. reduce로 간단하게 사용 가능하다.
// a.reduce((acc, curr, i) => acc += curr * b[i], 0)
