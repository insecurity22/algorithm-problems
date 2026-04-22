# Lv.1 문제 풀이 (JavaScript)

문제를 JavaScript(Node.js)로 풀이한 저장소입니다.

## 1. 자릿수 더하기 (`20260420_12931.js`)

- 자연수 n의 각 자릿수의 합을 구하며, 문자열로 계산하는 것이 아닌, `10으로 나눈 나머지(%)`와 `몫(Math.trunc)`을 이용합니다.

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

- 추가적으로 위 자릿수 분리 방식을 활용하여, 숫자를 뒤집은 배열도 생성할 수 있습니다.

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

## 2. 핸드폰 번호 가리기 ⭐ (`20260421_12948.js`)

- 전화번호의 마지막 4자리를 제외한 나머지를 `*`로 가려야합니다. 문자열 길이를 기준으로 `*`를 반복 생성해 붙이는 방식으로 해결할 수도 있지만, 정규식과 `replace`를 사용하면 더 간결하고 가독성 있게 표현 가능합니다.
- `\d(?=\d{4})` 패턴
  - `\d`: 숫자 1개
  - `(?=...)`: 전방 탐색(뒤 조건만 확인, 결과에는 미포함)
  - `(?=\d{4})`: 뒤에 숫자 4개가 이어져 있는지 확인

```js
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
```

## 3. 가운데 글자 가져오기 (`20260421_12903.js`)

- 문자열 길이(`len`)와 가운데 인덱스(`mid = Math.floor(len / 2)`)를 먼저 구한 뒤, 짝수, 홀수 여부에 따라 `slice` 범위를 나눠 반환합니다.
  - 짝수 길이: `slice(mid-1, mid+1)`로 가운데 2글자
  - 홀수 길이: `slice(mid, mid+1)`로 가운데 1글자
  - 두 길이를 반환해 분기 로직을 짧고 명확하게 유지

```js
function solution(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(mid, mid + 1);
}
```

## 4. 내적 (`20260421_70128.js`)

- 두 배열의 같은 인덱스 값끼리 곱한 뒤 `sum`에 누적해 내적을 계산합니다. 동일 로직을 `reduce`로 더 간단하게 표현할 수도 있습니다.

```js
function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
```

```js
function solution(a, b) {
  return a.reduce((acc, curr, i) => acc + curr * b[i], 0);
}
```

## 5. 약수의 개수와 덧셈 (`20260421_77884.js`)

- `left`부터 `right`까지 순회하며 각 수의 약수 개수를 구하고, 약수 개수가 짝수면 더하고 홀수면 빼서 누적 합을 계산합니다.
- 대부분 수는 약수가 짝으로 존재해 약수 개수가 짝수이고, `완전제곱수`만 약수 개수가 홀수라는 성질을 이용하면 `Math.sqrt`로 더 간단히 판별할 수 있습니다.

```js
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let divisorCount = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisorCount++;
    }
    if (divisorCount % 2 === 0) sum += i;
    else sum -= i;
  }
  return sum;
}
```

```js
...
for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
}
...
```

## 6. 부족한 금액 계산하기 (`20260420_82612.js`)

- 놀이기구를 `count`번 탈 때 총금액은 `price * (1 + 2 + ... + count)` 형태이며, 반복문 누적 대신 가우스 공식을 쓰면 더 간결합니다.
  - 가우스 공식: `1 + 2 + ... + n = n(n + 1) / 2`

```js
function solution(price, money, count) {
  const total = price * ((count * (count + 1)) / 2) - money;
  return total > 0 ? total : 0;
}
```

## 7. 문자열 다루기 기본 ⭐ (`20260421_12918.js`)

- `isNaN`은 공백(`" "`), 빈 문자열(`""`), 지수 표기(`"1e22"`) 등의 값도 숫자로 처리될 수 있어 문자열 검증에는 적합하지 않습니다. 이런 예외 케이스를 안정적으로 걸러내려면 문자열 자체를 검사하는 정규식을 쓰는 편이 안전합니다.
- 길이 조건까지 정규식으로 합치면 `^\d{4}$|^\d{6}$`처럼 한 번에 표현할 수도 있습니다.

```js
function solution(s) {
  return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
}
```
