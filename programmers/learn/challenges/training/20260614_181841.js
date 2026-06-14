function solution(str_list, ex) {
    return str_list.filter((str) => str.includes(ex)).join('');
}

// 1. 문자열 포함 여부 확인
// → includes가 보통 가장 적절함

// 2. 배열.includes를 반복 호출
// → Set으로 바꾸는 게 유리할 수 있음

// 3. 복잡한 패턴 검색
// → RegExp 사용