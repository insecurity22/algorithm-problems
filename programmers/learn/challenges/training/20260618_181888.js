function solution(num_list, n) {
    return num_list.filter((_, i) => i % n === 0);
}

// !(i % n)로도 가능하지만,
// boolean 변환과 부정 연산을 해석해야 하므로 i % n === 0이 더 직관적이다.