function solution(numbers) {
    const set = new Set(numbers);
    
    let answer = 0;
    for(let i = 0; i <= 9; i++) {
        if(!set.has(i)) {
            answer += i;
        }
    }
    
    return answer;
}

// 한 줄로도 간단하게 가능
// return 45 - numbers.reduce((cur, acc) => cur + acc, 0);