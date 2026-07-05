function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(
        numbers[0] * numbers[1], 
        numbers.at(-1) * numbers.at(-2)
    );
}

// 1. 음수가 존재할 수 있으므로
//    가장 큰 두 수의 곱뿐만 아니라
//    가장 작은 두 수의 곱도 계산하여 둘 중 큰 값을 선택해야 한다.