function solution(arr, idx) {
    // 1. 조건: idx보다 크거나 같다.
    for(let i = idx; i < arr.length; i++) {
        if(arr[i] === 1) return i;
    }
    // 2. 결과: 가장 작은 인덱스를 찾아서 반환
    return -1;
}

// 1. 메서드를 활용한 풀이

// 1) indexOf(searchElement, fromIndex)
// - fromIndex부터 검색 시작, 배열에서 특정 값의 첫 번째 인덱스 반환
// - 찾는 값이 없으면 -1 반환

// function solution(arr, idx) {
//     return arr.indexOf(1, idx);
// }

// 2) findIndex(callback)
// - 조건을 만족하는 첫 번째 요소의 인덱스를 반환
// - 조건을 만족하는 요소가 없으면 -1 반환

// function solution(arr, idx) {
//     return arr.findIndex((v, i) => i >= idx && v === 1);
// }