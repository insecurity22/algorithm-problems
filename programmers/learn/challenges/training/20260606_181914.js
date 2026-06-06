function solution(number) {
    return [...number].reduce((acc, cur) => acc + Number(cur), 0) % 9;
}

// 1. for문 방식도 가능하지만, 이 문제는 전형적인 누적 문제이므로 reduce를 사용하면 의도가 한 줄로 명확하게 드러난다.

// function solution(number) {
//     let sum = 0;
//     for (const i of number) {
//         sum += Number(i);
//     }
//     return sum % 9;
// }

// 2. 전개 연산자 대신 Array.from(number)를 사용할 수도 있다.
//    둘 다 문자열을 배열로 변환하는 방법이며 기능상 차이는 없다.

// 3. Number() 대신 단항 + 연산자를 사용할 수도 있다.
//    예: +cur