function solution(s) {
    const len = s.length;
    const mid = Math.floor(len / 2);

    return len % 2 === 0
        ? s.slice(mid - 1, mid + 1)
        : s.slice(mid, mid + 1);
}

// 1. "변수"를 위와 같은 방식으로 분리하여 관리하면 아래보다 가독성이 좋아보인다.
// function solution(s) {
//     const arr = s.split("");
//     const half = Math.trunc(arr.length / 2);
//     if(arr.length % 2 === 0) {
//         return `${arr[half-1]}${arr[half]}`;
//     }
//     return arr[half];
// }

// 2. "템플릿 리터럴"을 위와 같은 방식으로 slice(start, end)를 사용하면 간단하다. (일부를 잘라서 새로 만들어주는 함수)
// function solution(s) {
//     let len = s.length;
//     let position = Math.trunc(len / 2);
//     if(len % 2 === 0) {
//         return `${s[position-1]}${s[position]}`;
//     }
//     return s[position];
// }