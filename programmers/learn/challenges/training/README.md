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

## 3. 홀짝 구분 합 (`20260523_181887.js`)

- 배열은 0번 인덱스부터 시작하므로, 홀짝은 **인덱스가 아닌 순서(몇 번째)** 기준으로 판단해야 한다.
  - 짝수 인덱스 → 홀수 번째 값
  - 홀수 인덱스 → 짝수 번째 값
  - 예: 0번 인덱스 → 1번째(홀수 번째), 1번 인덱스 → 2번째(짝수 번째)
- 채택한 풀이는 `position = i + 1`로 순서를 계산한 뒤, 홀수·짝수 번째 합을 각각 누적하고 `Math.max`로 더 큰 값을 반환한다.
  - `position` 계산 → 홀수 번째 확인 → `odd`/`even` 누적 흐름이 자연스럽게 읽히며, 로그 출력·조건 추가·디버깅 등 수정과 유지보수가 편하다.

### 채택 풀이

```js
function solution(num_list) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num_list.length; i++) {
    const position = i + 1;
    if (position % 2) odd += num_list[i];
    else even += num_list[i];
  }
  return Math.max(odd, even);
}
```

### 다른 풀이 비교 (개인적 의견)

**방법 1 — `reduce` + 구조 분해 + spread**

- 구조 분해, 삼항 연산자, 배열 변환, spread 문법이 한 줄에 모여 한눈에 이해하기 어렵고 가독성이 떨어지며, `reduce`는 중간 상태를 추적하기 어렵다.

```js
return Math.max(
  ...num_list.reduce(
    ([odd, even], curr, i) => (i % 2 ? [odd + curr, even] : [odd, even + curr]),
    [0, 0],
  ),
);
```

**방법 2 — `forEach`**

- 결과 배열을 만들지 않으므로 `map`보다 `forEach`가 더 적절해보인다.
- `odd > even ? odd : even`보다 `Math.max`가 "둘 중 큰 값 반환"이라는 의도가 메서드 이름만으로 드러나 가독성이 좋아보인다.

```js
let odd = 0,
  even = 0;
num_list.forEach((num, index) => (!(index % 2) ? (even += num) : (odd += num)));
return Math.max(odd, even);
```

**방법 3 — `filter` + `reduce`**

- 합산 로직을 함수로 분리해 의도는 잘 보이고 재사용 구조처럼 느껴진다.
- 하지만 `filter`가 새 배열을 만들고 `reduce`까지 이어져 순회가 여러 번 발생한다. 또한 단순한 문제에 비해 구조가 과하고, 읽을 때 흐름 추적이 더 필요하다.

```js
const sum = (condition) =>
  num_list
    .filter((_, index) => condition(index))
    .reduce((acc, cur) => acc + cur, 0);
const oddSum = sum((index) => index % 2 === 0);
const evenSum = sum((index) => index % 2 === 1);
return oddSum < evenSum ? evenSum : oddSum;
```
