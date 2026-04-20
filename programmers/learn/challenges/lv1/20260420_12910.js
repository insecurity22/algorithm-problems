function solution(arr, divisor) {
    let answer = [];
    for(num of arr) {
        if(num % divisor === 0) {
            answer.push(num);
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// filter 사용하여 두 줄로도 간단하게 가능
// var answer = arr.filter(v => v%divisor == 0);
// return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);