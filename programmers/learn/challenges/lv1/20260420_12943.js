function solution(num) {
    let workCount = 0;
    while(num !== 1 && workCount < 500) {
        if(num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        workCount++;
    }
    return num === 1 ? workCount : -1;
}

// 한 줄로도 간단하게 가능 (4-8번 줄)
// num = (num % 2 === 0) ? num / 2 : num * 3 + 1;