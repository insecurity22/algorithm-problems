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

## 2. BigInt — 큰 수 덧셈 (`20260518_181846.js`)

- JavaScript `Number` 타입은 매우 큰 정수를 정확하게 표현하지 못할 수 있다. 예를 들어 `9999999999999999` 같은 큰 값은 오차가 발생할 수 있다.
- 따라서 문자열로 주어진 큰 정수는 `BigInt()`로 변환해 연산하고, 결과는 `.toString()`으로 문자열로 반환하는 방식이 안전하다.
- `BigInt()` 없이 구현하려면 뒤에서부터 숫자를 하나씩 꺼내 더하고, 합이 10 이상인 경우 자리올림을 처리하는 방식으로 구현할 수 있다.

```js
function solution(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
```
