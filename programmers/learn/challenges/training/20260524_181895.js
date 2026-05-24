function solution(arr, intervals) {
    return intervals.reduce((acc, [start, end]) => {
        return [...acc, ...arr.slice(start, end + 1)];
    }, []);
}

// 데이터가 커질수록 성능 차이가 커지며, 실무나 성능 관점에서는 push() 방식이 더 효율적이다.

// 1. spread 방식: 데이터가 매우 크면 성능상 비효율적일 수 있다.
// - 매 반복마다 새 배열 생성
// - 기존 배열 요소를 모두 복사한 뒤 새 값 추가
// - 배열 크기가 커질수록 메모리 사용량과 복사 비용 증가

// 2. push() 방식
// - 기존 배열이 재사용
// - 새 배열을 생성하지 않고 값만 추가
// - 불필요한 복사가 없어 더 효율적이고 빠름

// function solution(arr, intervals) {
//     return intervals.reduce((acc, [start, end]) => {
//         acc.push(...arr.slice(start, end + 1));
//         return acc;
//     }, []);
// }

// 3. 현재 문제는 intervals가 항상 2개이므로 slice + spread 방식이 더 직관적이고 깔끔한 풀이에 가깝다.
// 다만 reduce 방식은 구간 개수가 늘어나도 그대로 사용할 수 있어 데이터 구조 변화에 더 유연하다는 장점이 있다.

// function solution(arr, intervals) {
//     const [a, b] = intervals;
//     return [
//         ...arr.slice(a[0], a[1] + 1),
//         ...arr.slice(b[0], b[1] + 1)
//     ];
// }