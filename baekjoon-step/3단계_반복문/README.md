# 3단계 반복문 학습 메모

반복문 단계를 풀면서 자주 쓰는 문법과 실전에서 중요한 포인트를 정리했습니다.

## 1) 숫자 변환: `Number`를 기본으로 사용

- 입력값을 숫자로 바꿀 때는 `Number()`를 기본으로 사용하는 것이 소수점을 자동으로 버리지 않아 안전합니다.
- 소수점 처리(버림 등) 필요할 때 `Math.floor`, `Math.trunc`같은 명시적인 함수를 함께 쓰는 습관이 안전합니다.

```js
const n = Number(input);
const intN = Math.trunc(Number(input));
```

## 2) 배열 숫자 변환: `.map(Number)`

- 공백 기준으로 나눈 문자열 배열은 `.map(Number)`로 한 번에 숫자 배열로 변환할 수 있습니다.

```js
const nums = input.trim().split(" ").map(Number);
```

## 3) 문자열 반복: `"long ".repeat(n / 4) + "int"`

- 같은 문자열을 여러 번 이어 붙일 때 `repeat()`를 쓰면 코드가 짧고 직관적입니다.

```js
const result = "long ".repeat(n / 4) + "int";
```

## 4) `for`문의 시작점/증감식 커스터마이징

- `for`문은 시작값을 자유롭게 정할 수 있습니다. (예: `let i = 2`)
- 증감식도 상황에 맞게 바꿀 수 있습니다. (예: `i += 2`로 짝수만 순회)

```js
for (let i = 2; i <= n; i += 2) {
  // 짝수만 처리
}
```

## 5) 출력이 많으면 I/O 병목으로 시간 초과 가능

- `console.log`는 단순 문자열 작업이 아니라 실제 I/O(OS와 통신)입니다.
- 예를 들어 1,000,000번처럼 출력 횟수가 매우 많으면 계산보다 출력이 병목이 되어 시간 초과가 날 수 있습니다. 즉 계산 속도보다 I/O 속도가 느려서 TLE 발생 가능합니다. ✅
- 해결 방법: 문자열을 배열/버퍼에 모아 마지막에 한 번에 출력합니다.

```js
const out = [];
for (let i = 1; i <= 1000000; i++) out.push(String(i));
process.stdout.write(out.join("\n"));
```

## 6) 배열에 문자열을 `push`하고 `join`으로 한 번에 출력

- 반복문에서 바로 `console.log`를 호출하지 않고, 문자열을 배열에 `push` 해 두었다가 마지막에 `join`으로 한 번에 묶어서 출력할 수 있습니다.
- 별 찍기(2438번)처럼 줄마다 문자열을 만들어야 하는 경우, `"*".repeat(i)`로 한 줄을 만들고 배열에 `push` 한 뒤, `join("\n")`으로 줄바꿈을 붙여 한 번에 출력하면 깔끔합니다.

```js
// 예: 2438번 풀이 아이디어
const fs = require("fs");
const N = Number(fs.readFileSync("./input.txt").toString().trim());

const lines = [];
for (let i = 1; i <= N; i++) {
  lines.push("*".repeat(i));
}

console.log(lines.join("\n"));
```
