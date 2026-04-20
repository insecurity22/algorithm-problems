# Lv.1

## 1. 자릿수 더하기 (`20260420_12931.js`)

- 자연수 n의 각 자릿수의 합을 구한다.
- 문자열로 반환하지 않고, **10으로 나눈 나머지(%) · 몫(Math.trunc)**을 이용한다.

```js
function solution(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10; // 마지막 자릿수 추출
    n = Math.trunc(n / 10); // 자릿수 제거
  }
  return sum;
}
```

- 위의 자릿수 분리 방식을 활용하여, 숫자를 뒤집은 배열을 생성할 수 있다.

```js
function solution(n) {
  let answer = [];
  while (n > 0) {
    answer.push(n % 10);
    n = Math.trunc(n / 10);
  }
  return answer;
}
```
