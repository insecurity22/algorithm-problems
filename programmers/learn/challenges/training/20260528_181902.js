function solution(my_string) {
    const arr = Array(52).fill(0);

    [...my_string].forEach((str) => {
        const code = str.charCodeAt();
        const isUpperCase = 65 <= code && code <= 90;

        if(isUpperCase) arr[code - 65] += 1;
        else arr[code - 71] += 1;
    })
    
    return arr;
}

// 1. 알파벳 대문자 + 소문자 개수만큼 총 52칸 배열 생성
// 1) A(65) ~ Z(90) : 26개
// 2) a(97) ~ z(122) : 26개

// 2. 아스키 코드를 배열 인덱스로 변환
// 1) 대문자 A ~ Z → 0 ~ 25
// - 'A'.charCodeAt() = 65 이므로 65를 빼서 인덱스 맞춤
// 2) 소문자 a ~ z → 26 ~ 51
// - 'a'.charCodeAt() = 97 이므로 71을 빼서 26번부터 시작하도록 맞춤

// 3. reduce를 활용한 간단한 방식
// - 한 줄로 짧게 작성할 수 있어 잘 짠 코드처럼 보일 수 있다.
// - 하지만 로직이 압축되어 있어 처음 보면 이해하기 어렵고, 디버깅 및 수정 과정에서 실수 가능성이 커질 수 있다.
// - 실무에서는 짧은 코드보다 읽기 쉬운 코드를 더 중요하게 보는 경우가 많으며, 특히 "3개월 뒤 다시 봐도 이해할 수 있는 코드인가?"를 중요하게 생각한다.
// - if (65 <= code && code <= 90) 처럼 조건이 명확하게 드러나는 코드가 가독성과 유지보수 측면에서 유리하고, 명확한 변수명, 조건 분리, 읽기 쉬운 흐름이 중요하다.
// return [...str].reduce((p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p), Array(52).fill(0));