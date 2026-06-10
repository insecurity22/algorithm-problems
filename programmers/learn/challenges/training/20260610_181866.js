function solution(myString) {
    return myString.split('x').filter(Boolean).sort();
}

// 1. match를 사용한 풀이
// - 정규식을 사용하면 필요한 문자열만 추출하므로 빈 문자열 제거를 위한 filter 과정이 필요 없다.
// - 코드가 더 짧고 간결하지만, 정규식에 익숙하지 않다면 "이게 무슨 의미지?" 하고 한 번 해석해야 할 수 있다.
// - 따라서 가독성 측면에서는 split + filter 방식이 더 직관적이라고 생각한다.

// return myString.match(/[^x]+/g).sort();