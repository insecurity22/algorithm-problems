function solution(rank, attendance) {
    const selected = rank
        .map((r, i) => [r, i])
        .filter((_, i) => attendance[i])
        .sort(([a], [b]) => a - b);
    
    const [[_, a], [__, b], [___, c]] = selected;
    
    return 10000 * a + 100 * b + c;
}

// 1. 결과
// 예를 들어 2, 0, 3일 때, 
// - 계산식: 10000 * 2 + 100 * 0 + 3
// - 3명의 번호를 자릿수로 합치는 것이므로: 20000 + 0 + 3 = 20003

// 2. 학생 번호(index)만 들고 다니면서 rank 배열을 참고해서 정렬하는 방식이다.
// function solution(rank, attendance) {
//     return rank
//         // 1. 학생 번호 배열 생성
//         .map((_, i) => i)
//         // 2. 참석 가능한 학생만 남김
//         .filter((v) => attendance[v])
//         // 3. 학생 등급을 기준으로 정렬
//         .sort((a, b) => rank[a] - rank[b])
//         // 4. 상위 3명만 자른다.
//         .slice(0, 3)
//         // 5. 기존 acc를 두 자리 밀어(*100), 새 숫자를 뒤에 붙이는 계산으로 결과 값을 계산한다.
//         // 1) acc = 2
//         // 2) acc = 200
//         // 3) acc = 20003
//         .reduce((acc, cur) => acc * 100 + cur, 0)
// }