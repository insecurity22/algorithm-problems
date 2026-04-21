function solution(s) {
    return s.split("").sort().reverse().join("");
}

// 1. arr.sort() 정렬 함수
// - 기본적으로 문자열은 유니코드 값을 기준으로 정렬된다.
// - 이때 대문자가 소문자보다 앞에 온다.
//   예: ["B", "a", "c"] → ["B", "a", "c"]
//       "B"(66) < "a"(97) < "c"(99)
//
// - 내림차순 정렬이 필요할 경우 arr.reverse()를 함께 사용한다.