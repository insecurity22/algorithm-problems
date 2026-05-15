function solution(myString, pat) {
    let count = 0;
    for(let i = 0; i < myString.length; i++) {
        if(myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    };
    return count;
}

// 현재 코드도 동작은 하지만 불필요하게 끝까지 반복하게 된다.
// 따라서 i <= myString.length - pat.length 범위까지만 검사하는 것이 더 적절하다.
// 1. 불필요한 반복을 줄일 수 있음
// 2. 검사 범위에 대한 의도가 더 명확해짐