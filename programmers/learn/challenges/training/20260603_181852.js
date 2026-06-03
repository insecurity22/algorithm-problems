function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(5);
}

// slice(0, 5): 인덱스 0부터 5 이전까지 (앞의 5개)
// slice(-5): 뒤에서 5번째 요소부터 끝까지
// slice(5): 인덱스 5부터 끝까지