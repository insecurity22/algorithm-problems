// 1.
function solution(num_list) {
    let even = '', odd = '';
    num_list.forEach((num) => num % 2 === 0 ? even += num : odd += num);
    return +even + +odd;
}

// 2. filter + join를 활용한 방법
// - filter로 홀수와 짝수를 각각 구할 수 있어 더 직관적이다.
// - 다만 배열을 두 번 순회하므로, 한 번의 순회로 처리하는 1번 방식이 더 좋아 보인다.

// function solution(num_list) {
//     const odd = num_list.filter(v => v % 2).join('');
//     const even = num_list.filter(v => !(v % 2)).join('');
//     return Number(odd) + Number(even);
// }

// 3. reduce를 활용한 방법
// - 모든 상태(홀수/짝수 분류, 문자열 생성)를 한 번의 순회로 처리하며, reduce 내부에서 관리해 코드를 간결하게 표현할 수 있다.
// - 다만 로직이 압축되어 있어 몇 달 뒤에 다시 보면 1번 방식이 더 빠르게 읽힐 것 같다.

// function solution(num_list) {
//     const [even, odd] = num_list.reduce((acc, cur) => (acc[cur % 2] += String(cur), acc), [0, 0]);
//     return +even + +odd;
// }
    
// 4. 결론
// - 가장 중요한 것은 다른 사람이 읽기 쉬운 코드라고 생각하며, 그런 점에서 1번 방식이 가장 좋아 보인다.
// - 다만 취향의 영역이지만, 개인적으로는 과하지 않은 선에서 코드를 압축해 규칙을 표현하는 스타일을 선호해 3번 방식이 더 매력적으로 느껴진다.