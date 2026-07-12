function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// 1. parseInt(number, 2)
// - 2진수를 10진수로 변환한다.

// 2. number.toString(진법)
// - 숫자를 해당 진법의 문자열로 변환한다.
// - 예: toString(2)는 2진수 문자열로 변환하는 기능이다.

// 3. 이진수 계산 로직 구현 방법도 있다...
// /learn/courses/30/lessons/120885/solution_groups?language=javascript