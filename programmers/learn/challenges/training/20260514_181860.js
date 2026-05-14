function solution(arr, flag) {
    const answer = [];
    arr.map((num, numIndex) => {
        if(flag[numIndex]) {
            for(let i = 0; i < num * 2; i++) {
                answer.push(num);
            }
        } else {
            for(let i = 0; i < num; i++) {
                answer.pop(num);
            }
        }
    })
    return answer;
}

// 1. for + pop() 대신 아래와 같이 간단하게 사용 가능하다.
// answer.splice(-num);

// 2. reduce를 사용하면 간단하게 풀 수 있다.
// return arr.reduce(
//    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
//    [],
// );