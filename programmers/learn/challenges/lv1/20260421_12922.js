function solution(n) {
    return "수박".repeat(Math.ceil(n / 2)).slice(0, n);
}

// 1. 아래 코드보다 간단한 위 코드 추천
// 1) n/2 → 필요한 반복 횟수 계산
// 2) ceil → 부족하지 않게 보정
// 3) slice → 정확히 n 맞춤
// function solution(n) {
//     let answer = "";
//     for(let i = 0; i < n; i++) {
//         if(i % 2 === 0) {
//             answer += '수';
//         } else {
//             answer += '박';
//         }
//         // 간단하게 사용 가능 (answer += (i % 2 === 0) ? '수' : '박')
//     }
//     return answer;
// }

// 2. '수박'.repeat(n).slice(0, n)로도 간단하게 사용 가능하다. 
// - n = 10000 → 20000 길이 문자열 생성 후 → 다시 10000으로 자른다.
// - 하지만 필요한 길이보다 2배 큰 문자열을 생성한 뒤, 잘라내는 비효율이 있다.
// - 이런 차이가 대용량 처리에서 성능 차이로 이어질 수 있다.
// function solution(n) {
//     return '수박'.repeat(n).slice(0, n);
// }