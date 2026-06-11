function solution(flo) {
    return parseInt(flo);
}

// 1. parseInt()
// - 값을 문자열로 변환한 뒤 정수 부분만 읽어 소수점 이하를 제거한다.

// 2. Math.floor()
// - 숫자를 그대로 연산해 가장 가까운 작은 정수로 내림한다.

// 3. Math.trunc()
// - 양수에서는 Math.floor()와 결과가 같지만, 음수에서는 결과가 달라질 수 있다.

// 4. 결론
// - 이 문제에서는 세 방법 모두 정답 처리 가능하다.
// - 다만 parseInt()는 문자열 변환 함수이므로 숫자 연산 함수인 Math.floor() 또는 Math.trunc()가 더 적절하다.
// - 그중에서도 Math.floor()가 문제의 의도를 가장 명확하게 드러낸다고 생각한다.