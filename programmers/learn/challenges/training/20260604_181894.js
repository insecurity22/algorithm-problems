function solution(arr) {
    const result = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    return result.length ? result : [-1];
}

// 1. 아래 방법이 더 가독성 좋아보인다.
// - indexOf() 찾는 값이 없으면 -1을 반환하는 것을 이용
// function solution(arr) {
//     const start = arr.indexOf(2);
//     const end = arr.lastIndexOf(2);
//     return start === -1 ? [-1] : arr.slice(start, end+1);
// }