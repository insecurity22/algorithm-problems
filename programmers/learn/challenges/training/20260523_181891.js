function solution(num_list, n) {
    return [...num_list.slice(n), ...num_list.slice(0, n)];
}

// (+)
// 1. ...전개 연산자 사용
// 2. slice 사용 시, 끝 인덱스 생략 가능