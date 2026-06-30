function solution(my_string) {
    return [...my_string].map((str) => str.match(/[a-z]/) ? str.toUpperCase() : str.toLowerCase()).join('')
}

// 1. 현재 풀이
// - 대소문자만 판별하면 되는 단순한 문제인데, 정규식을 사용하고 매 문자마다 실행한다는 점이 다소 과하게 느껴질 수 있다.
// - match()는 배열 또는 null을 반환하므로 코드의 의도가 직관적으로 드러나지 않을 수 있다.

// 2. toLowerCase() 비교 풀이
// - 정규식 없이 대소문자를 판별할 수 있고, 1번 풀이보다 간결하며 의도가 더 명확하다.

// return [...my_string].map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()).join('');

// 3. for...of 풀이
// - 문자열을 순회하며 바로 결과를 만들어 가장 직관적이고 이해하기 쉬운 방법이다.

// let answer = '';
// for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
// return answer;

// 4. 결론
// - 2번과 3번은 성능 차이가 거의 없어, 취향 차이에 가깝다고 생각한다.
// - 2번은 함수형 메서드를 활용해 더 간결하다는 장점이 있고,
//   3번은 동작 과정을 따라가기 쉽고 디버깅이 편하다는 장점이 있다.
// - 개인적으로는 별도의 변수를 만들지 않아도 되는 2번 풀이를 선호한다.