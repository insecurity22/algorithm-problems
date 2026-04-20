function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i < absolutes.length; i++) {
        const isPositiveNumber = signs[i] ? 1 : -1;
        sum += absolutes[i] * isPositiveNumber;
    }
    return sum;
}

// 한 줄로도 간단하게 가능
// absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);