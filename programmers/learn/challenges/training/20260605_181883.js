function solution(arr, queries) {
    return queries.reduce((acc, [s, e]) => {
        for(let i = s; i <= e; i++) {
            acc[i] += 1;
        }
        return acc;
    }, arr)
}

// 1. 아래 forEach + while 방식이 더 좋아보인다.
// - 일반적으로 reduce는 여러 값을 하나의 결과로 누적할 때 사용한다.
// - 하지만 이 문제는 누적값을 계산하는 것이 아니라 기존 배열을 직접 수정하는 로직이다.

// - reduce를 사용할 수도 있지만, 누적 연산을 수행하지 않아 사용 의도가 다소 모호하게 느껴질 수 있다.
// - 반면 forEach는 쿼리를 순회한다는 목적이 명확하게 드러나므로 코드의 의도를 파악하기 쉽다.

// function solution(arr, queries) {
//     queries.forEach(([s, e]) => {
//         while (s <= e) arr[s++]++;
//     });
//     return arr;
// }