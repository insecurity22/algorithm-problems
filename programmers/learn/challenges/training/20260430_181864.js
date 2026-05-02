function solution(myString, pat) {
    return myString.replaceAll('A', 'b').replaceAll('B', 'a').toUpperCase().includes(pat) ? 1: 0;
}

// 1. 성능 차이는 없지만 가독성, 의도 전달을 따졌을 때는 아래 코드가 더 나아보인다.
// myString.split('').map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;