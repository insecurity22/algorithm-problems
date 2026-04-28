function solution(arr) {
    let result = [];
    arr.map((cur, i) => {
        const prev = arr[i - 1];
        if(prev !== cur) {
            result.push(cur);
        }
    });
    return result;
}

// 1. filter 함수를 사용해 간단하고 알기 쉽게 풀 수 있다..
// return arr.filter((val, i) => v != arr[i+1])