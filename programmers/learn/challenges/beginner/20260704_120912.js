function solution(array) {
    return array.reduce((acc, cur) => {
        return acc + [...String(cur)].filter((v) => v === '7').length;
    }, 0);
}

// 1. 기존 풀이
// - 각 숫자에서 7의 개수를 누적하는 방식으로 직관적이지만 코드가 다소 길다.
// - 단순히 7의 개수만 구하면 되는 문제에 비해 여러 과정을 거쳐 구현이 다소 복잡하다. (String 변환, 배열 생성, filter 등)

// 2. join + split 풀이
// - 배열을 문자열로 합친 뒤 '7'을 기준으로 나누는 방식으로, 가장 간결하고 직관적이다.

// return array.join('').split('7').length - 1;

// 3. join + filter 풀이
// - 배열을 문자열로 합친 뒤 7만 남겨 개수를 세는 방식으로, 동작은 명확하지만 중간 객체가 여러 번 생성된다.

// return Array.from(array.join('')).filter(v => v === '7').length;