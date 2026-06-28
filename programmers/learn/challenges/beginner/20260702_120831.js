function solution(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc) - 1;
}

// 1. Array(n)만으로 생성한 배열은 빈 슬롯(empty slot)으로 구성되어 있어,
//    값을 채우지 않으면 map(), filter(), reduce() 등의 반복 메서드가 실행되지 않는다.

// 2. 수열 공식을 이용한 방법
// - 2 + 4 + 6 + ... + n 의 합은 half * (half + 1)로 구할 수 있다.

// let half = Math.floor(n/2);
// return half * (half + 1);

// 3. 메서드 체이닝 방법
// - 동작 과정을 순서대로 확인할 수 있으며, 짝수만 선택한다는 조건이 명확하게 드러나 가독성이 좋다.

// return Array(n)
//   .fill()
//   .map((_, i) => i + 1)
//   .filter((v) => v % 2 === 0)
//   .reduce((acc, cur) => acc + cur, 0);

// 4. for 사용 방법
// 1) 1부터 n까지 순회하며 짝수만 더하는 가장 기본적인 방법이다.

// let answer = 0;
// for(let i = 1; i <= n; i++) {
//     if(i % 2 === 0) answer += i;
// }
// return answer;

// 2) 2부터 2씩 증가하며 순회해 홀수 여부를 검사하는 과정을 줄일 수 있다.

// let answer = 0;
// for(let i = 2; i <= n; i += 2) {
//     answer += i;
// }
// return answer;