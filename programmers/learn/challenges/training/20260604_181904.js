function solution(my_string, m, c) {
    let str = '';
    for(let i = c - 1; i < my_string.length; i += m) {
        str += my_string[i];
    }
    return str;
}

// 1. 전개 연산자와 filter를 사용해 간단하게 구현할 수도 있다.
// - 다만 문자열을 배열로 변환한 뒤, filter 결과 배열을 다시 생성하므로 중간 배열이 최소 2개 만들어진다.
// - 반면 for문은 중간 배열 생성 없이 필요한 위치의 문자에 바로 접근한다.

// - 두 방식 모두 문자열을 한 번 순회하므로 시간복잡도는 O(n)이다.
// - 다만 성능과 메모리 사용 측면에서는 for문이 조금 더 유리하다.
// - 또한 for (i += m) 방식은 "m칸씩 이동하며 문자를 선택한다"는 문제의 규칙이 코드에 직접 드러나 의도를 파악하기 쉽다.

// return [...my_string].filter((_, i) => i % m === c - 1).join('');