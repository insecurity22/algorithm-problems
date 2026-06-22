function solution(my_string) {
    return [...my_string].map((_, i) => my_string.slice(i)).sort();
}

// 1. 문자열 정렬 → sort()
// 2. 숫자 정렬 → sort((a, b) => a - b)