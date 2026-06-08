function solution(a, b, c) {
    const sum1 = a + b + c;
    const sum2 = (a ** 2 + b ** 2 + c ** 2);
    const sum3 = (a ** 3 + b ** 3 + c ** 3);
    
    if(a !== b && b !== c && a !== c) {
        return sum1;
    }
    if(a === b && b === c) {
        return sum1 * sum2 * sum3;
    }
    return sum1 * sum2;
}

// 1. Set을 사용하면 중복을 제거한 값의 개수로
// "모두 다름 / 두 개 같음 / 모두 같음"을 쉽게 판별할 수 있다.
// - 조건식을 직접 나열할 때 발생할 수 있는 예외 케이스를 놓치는 실수를 줄일 수 있어 더 안정적이다.

// function solution(a, b, c) {
//     const count = new Set([a, b, c]).size;

//     const sum1 = a + b + c;
//     const sum2 = a ** 2 + b ** 2 + c ** 2;
//     const sum3 = a ** 3 + b ** 3 + c ** 3;

//     if (count === 3) return sum1;
//     if (count === 2) return sum1 * sum2;
//     return sum1 * sum2 * sum3;
// }

// 2. 조건문 대신 계산 규칙을 일반화한 방법
// - 중복 개수(size)에 따라 필요한 제곱 수를 결정한다.
// - 계산 규칙이 변경되어도 쉽게 대응할 수 있어 확장성은 좋지만, 가독성은 첫 번째 방법보다 다소 떨어질 수 있다.

// function solution(a, b, c) {
//     const size = new Set([a, b, c]).size;

//     return [1, 2, 3]
//         .slice(0, 4 - size)
//         .reduce(
//             (acc, n) =>
//                 acc * (a ** n + b ** n + c ** n),
//             1
//         );
// }