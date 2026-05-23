function solution(num_list) {
    let odd = 0, even = 0;
    for(let i = 0; i < num_list.length; i++) {
        const position = i + 1;
        if(position % 2) odd += num_list[i];
        else even += num_list[i];
    }
    return Math.max(odd, even);
}

// 1. 배열은 0번 인덱스부터 시작하므로, 홀짝은 인덱스가 아닌 순서 기준으로 판단해야 한다.
// - 짝수 인덱스 → 홀수 번째 값
// - 홀수 인덱스 → 짝수 번째 값
//
// 예시)
// - 0번 인덱스 → 1번째(홀수 번째)
// - 1번 인덱스 → 2번째(짝수 번째)

// [다른 방법 풀이에 대한 개인적 의견]
// 방법 1.
// function solution(num_list) {
//     return Math.max(...num_list.reduce(([odd, even], curr, i) => i % 2 ? [odd + curr, even] : [odd, even + curr], [0, 0]));
// }
// 1) 구조분해, 삼항 연산자, 배열 변환, spread 문법이 한 번에 사용되어
//    한 눈에 이해하기 어려워 가독성이 떨어져 보인다. 
// 2) 반면 position 계산 → 홀수 번째 확인 → odd/even 누적 흐름은 
//    자연스럽게 읽히며, 수정과 유지보수가 더 편리하다.
// 3) 예를 들어 로그 출력, 조건 추가, 디버깅 등이 쉽고,
//    reduce 방식은 중간 상태를 추적하기 어렵다.

// 방법 2.
// function solution(num_list) {
//     let odd = 0, even = 0;
//     num_list.forEach((num, index) =>!(index % 2) ? even += num : odd += num);
//     return Math.max(odd, even);
// }
// 1) 결과 배열을 반환하지 않으므로 map보다 forEach가 더 적절해 보인다.
// 2) odd > even ? odd : even 보다는 Math.max가 가독성이 더 좋아보인다.
//   → "둘 중 큰 값 반환"이라는 의도가 메서드 이름만으로 바로 드러나기 때문.

// 방법 3.
// function solution(num_list) {
//     const sum = (condition) => num_list.filter((_, index) => condition(index)).reduce((acc, cur) => acc + cur, 0);
//     const oddSum = sum((index) => index % 2 === 0);
//     const evenSum = sum((index) => index % 2 === 1);
//     return oddSum < evenSum ? evenSum : oddSum;
// }
// 1) 함수 분리가 되어 있어서 의도는 잘 보이고, 재사용 구조 느낌이 있다.
// 2) filter가 새 배열을 생성하고, reduce까지 있어서 순회가 여러 번 발생
// 3) 실제로는 간단한 문제인데 구조가 과한 느낌이고, 읽을 때 흐름 추적이 더 필요하다.