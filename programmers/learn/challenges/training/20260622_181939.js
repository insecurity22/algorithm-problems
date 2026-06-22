function solution(a, b) {
    const frontA = Number(String(a) + String(b));
    const frontB = Number(String(b) + String(a));
    return Math.max(frontA, frontB);
}

// 1. 간단한 방법
// return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));