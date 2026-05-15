function solution(arr) {
    const xLength = arr.length;
    const yLength = arr[0].length;
    if(xLength < yLength) {
        // 행 추가
        while(arr.length < yLength) {
            arr.push(Array(yLength).fill(0));
        }
    }
    else {
        // 열 추가
        arr.forEach((r) => {
            while(r.length < xLength) {
                r.push(0);
            }
        });
    }
    
    return arr;
}

// 1. map 함수는 각 요소를 변환해 새로운 배열을 만드는 것이 목적이며, return 값이 핵심이다.
// [1,2,3].map(x => console.log(x))처럼 return 값이 없으면
// 새 배열에 들어갈 값이 없어 결과가 [undefined, undefined, undefined]가 된다.

// 2. forEach는 배열을 순회하면서 작업만 수행하는 함수이다.
// 결과(새 배열)가 필요 없는 경우에는 forEach를 사용하는 것이 더 적절하다.