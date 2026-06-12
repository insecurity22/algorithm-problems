function solution(str1, str2) {
    return str2.includes(str1) ? 1 : 0;
}

// 1. 간단한 방법
// return +str2.includes(str1);