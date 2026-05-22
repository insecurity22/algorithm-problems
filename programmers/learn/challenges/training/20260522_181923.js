function solution(arr, queries) {
    const answer = [];

    // [0, 4, 2]
    for(const [s, e, k] of queries) {
        let min = Infinity;
        
        // s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾는다.
        for(let i = s; i <= e; i++) {
            if(arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        
        answer.push(min === Infinity ? -1 : min);
    }
    
    return answer;
}

// (+)
// 1. let min = Infinity;   // 최솟값 비교용 초기값
// 2. let max = -Infinity;  // 최댓값 비교용 초기값

// 간단한 풀이
// queries의 각 [s, e, k]에 대해
// 1) arr의 s ~ e 구간을 자른다.
// 2) k보다 큰 값만 남긴다.
// 3) 오름차순 정렬 후 첫 번째 값(최솟값)을 꺼낸다.
// 4) 조건을 만족하는 값이 없으면 -1을 반환한다.

// return queries.map(([s, e, k]) =>
//     arr
//         .slice(s, e + 1)
//         .filter((n) => n > k)
//         .sort((a, b) => a - b)[0] || -1
// );
