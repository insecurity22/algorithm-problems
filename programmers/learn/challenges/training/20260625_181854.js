function solution(arr, n) {
    return arr.length % 2 === 0 
                   ? arr.map((num, i) => i % 2 !== 0 ? num + n : num) 
                   : arr.map((num, i) => i % 2 === 0 ? num + n : num);
}

// 1. 간단한 방법
// - 배열 길이와 인덱스의 홀짝이 다르면 n을 더한다.

// return arr.map((num, i) => arr.length % 2 !== i % 2 ? num + n : num);