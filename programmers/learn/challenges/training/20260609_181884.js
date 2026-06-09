function solution(numbers, n) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
        if (sum > n) break;
    }
    return sum;
}

// 1. reduce는 누적값 계산에는 적합하지만 조건에 따라 순회를 중단할 수 없어 이 문제에는 적합하지 않다고 생각했다.

// 2. forEach는 return을 해도 반복이 종료되지 않는다.
// - return은 현재 콜백 함수만 종료할 뿐, forEach 순회는 계속 진행된다. ex) v === 2에서 return을 했는데도 3, 4가 계속 실행
// - 따라서 조건을 만족했을 때 반복을 중단해야 하는 경우에는 적합하지 않다.

// [1, 2, 3, 4].forEach((v) => {
//     console.log('시작', v);
//     if (v === 2) return;
//     console.log('끝', v);
// });
// console.log('완료');

// 출력:
// 시작 1
// 끝 1
// 시작 2
// 시작 3
// 끝 3
// 시작 4
// 끝 4
// 완료