function solution(s) {
    let answer = [];
    let recentIndexMap = new Map();
    
    for(let i = 0; i < s.length; i++) {
        const str = s[i];
        answer[i] = !recentIndexMap.has(str) ? -1 : i - recentIndexMap.get(str);
        recentIndexMap.set(str, i);
    }
    
    return answer;
}

// 1. lastIndexOf(char) 함수를 사용하면 마지막 인덱스를 구할 수 있다.
// - 일치하지 않으면 -1을 반환한다.
//   [...s].map((char, i) => {
//     const idx = s.slice(0, i).lastIndexOf(char);
//     return idx < 0 ? idx : i - idx;
//   });

// 1-2. slice() 함수를 활용해 문자열을 잘라서 이전 인덱스와 비교할 수 있다.