function solution(arr) {
    const n = arr.length;
    
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr[i][j] === arr[j][i]) count ++;
        }
    }
    return Math.floor(count / (n * n));
}

// 1. count 변수를 제거하는 방법
// function solution(arr) {
//     const n = arr.length;
    
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             if(arr[i][j] !== arr[j][i]) return 0;
//         }
//     }
    
//     return 1;
// }

// 2. 더 간단하게 작성하는 방법
// - every() 함수: arr.every((item) => 조건)
// - 배열의 모든 요소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false
// return arr.every((row, i) => row.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;