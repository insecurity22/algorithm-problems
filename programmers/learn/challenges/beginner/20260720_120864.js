function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).filter(Boolean).reduce((acc, cur) => acc + +cur, 0);
}

// 1. 정규표현식 분리 ✨
// - \D+를 기준으로 문자열을 분리한다. (\D+: 숫자가 아닌 문자가 연속된 구간 전체를 한 번에 매칭)
// - Number("")는 0으로 변환되므로 빈 문자열을 별도로 제거하지 않아도 된다.

// return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);

// 2. 문자 분리 (현재 풀이)
// - 동작 과정이 직관적이지만 빈 문자 제거를 위해 filter(Boolean)이 한 번 더 필요하다.

// 3. 반복문
// - 숫자는 그대로 이어 붙이고, 문자는 공백으로 치환한다.
// - 마지막에 공백을 기준으로 분리해 숫자의 합을 구한다.

// let answer = "";
// for (let i = 0; i < my_string.length; i++) {
//     if (Number.isInteger(+my_string[i])) answer += my_string[i];
//     else answer += " ";
// }
// return answer.split(" ").reduce((acc, cur) => acc + +cur, 0);

// 4. 문자 치환
// - 동작은 직관적이지만, 여러 메서드를 연속으로 사용해 연산 과정이 다소 많다.

// return my_string
//     .toLowerCase()
//     .replace(/[a-z]/g, " ")
//     .split(" ")
//     .map(Number)
//     .reduce((acc, cur) => acc + cur, 0);