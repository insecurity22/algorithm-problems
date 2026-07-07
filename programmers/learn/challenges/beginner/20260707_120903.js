function solution(s1, s2) {
    let result = 0;
    s1.forEach((str1) => s2.forEach((str2) => str1 === str2 && result++));
    return result;
}

// 1. Set ✨
// - has()로 포함 여부를 확인하는 방식으로, 시간복잡도는 O(n + m)이고, 데이터가 많을수록 효율적이다.

// const set = new Set(s2);
// return s1.filter(v => set.has(v)).length;

// 2. filter + includes ✨
// - 문제의 요구사항인 '공통 원소만 남긴 뒤 개수를 구한다'는 의도가 코드에 명확하게 드러난다.
// - includes를 매번 수행하므로 현재 풀이(forEach 중첩)와 동일하게 시간복잡도는 O(n × m)이다.

// return s1.filter(v => s2.includes(v)).length;