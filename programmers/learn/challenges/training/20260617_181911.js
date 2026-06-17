function solution(my_strings, parts) {
    return my_strings.map((str, i) => str.slice(parts[i][0], parts[i][1] + 1)).join("")
}

// 1. 더 직관적인 방법
// - 이 문제의 핵심은 시작/끝 인덱스 정보가 담긴 parts이므로,
//   각 구간 정보를 꺼내 해당 문자열을 잘라내는 흐름으로 읽을 수 있다.
// return parts.map(([s, e], i) => my_strings[i].slice(s, e + 1)).join('');