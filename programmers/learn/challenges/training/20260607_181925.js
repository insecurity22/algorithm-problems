const convert = {
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a',
}

function solution(numLog) {
    let answer = '';
    for(let i = 0; i < numLog.length; i++) {
        const diff = numLog[i] - numLog[i - 1];
        answer += convert[diff] || '';
    }
    return answer;
}

// 1. 아래와 같이 간단하게 구현할 수 있다.
//
// 1) for + 객체 방식의 문제점
// - i = 0일 때 numLog[i - 1]이 존재하지 않아 diff가 NaN이 되며, 첫 반복은 의미 없는 계산을 수행하게 된다.
// - 즉, 구조적으로 첫 반복이 불필요하게 포함되는 형태이다.
//
// 2) slice(1)을 사용하는 이유
// - numLog[i - 1]을 항상 유효하게 만들기 위해 이전 값과 현재 값의 인덱스를 맞춰주는 역할이다.
// - 첫 값을 제거함으로써 이전 값과 현재 값을 같은 index로 정확히 맞춘다.

// return numLog.slice(1)
//   .map((num, i) => convert[num - numLog[i]])
//   .join('');
