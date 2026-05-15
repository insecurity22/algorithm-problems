# 코딩 기초 트레이닝 문제 풀이 (JavaScript)

문제를 JavaScript(Node.js)로 풀이한 저장소입니다.

## 1. map과 forEach (`20260515_181830.js`)

- `map`은 각 요소를 변환해 **새로운 배열**을 반환하는 함수이므로, 콜백 함수의 `return` 값이 중요하다.
  - 예를 들어 `[1, 2, 3].map((x) => console.log(x))`처럼 `return`이 없으면 새 배열에 담길 값이 없어 `[undefined, undefined, undefined]`가 반환된다.
- `forEach`는 배열을 순회하면서 **특정 작업을 수행**하기 위한 함수로, 반환값 없이 단순 반복이나 실행 목적일 때 사용하는 것이 적절하다.

```js
// 1. map — return 값으로 새 배열 생성
[1, 2, 3].map((x) => x * 2); // [2, 4, 6]

// 2. forEach — 반환값 없이 순회하며 부수 효과만 수행
const arr = [[1, 2], [3]];
arr.forEach((row) => {
  while (row.length < 2) row.push(0);
});
```
