# 알고리즘 고득점 Kit 문제 풀이 (JavaScript)

문제를 JavaScript(Node.js)로 풀이한 저장소입니다.

## 1. 같은 숫자는 싫어 (`스택/큐/20260428_12906.js`)

- `filter`를 활용해 이전 값과 비교하며 간단하게 중복을 제거할 수 있고, 읽기 쉽게 작성할 수 있습니다.

```js
function solution(arr) {
  return arr.filter((value, i) => value !== arr[i - 1]);
}
```

## 2. K번째수 (`정렬/20260428_42748.js`)

- `map`과 `filter`를 이용해 각 명령을 순회하면서 바로 반환하는 형태로도 작성 가능합니다.

```js
function solution(array, commands) {
  return commands.map(([start, end, position]) => {
    const newArray = array
      .filter((_, index) => index >= start - 1 && index <= end - 1)
      .sort((a, b) => a - b);
    return newArray[position - 1];
  });
}
```

## 3. 주식가격 (`스택/큐/20260504_42584.js`)

- 이중 `for`는 가독성은 좋을 수 있으나 입력이 커지면 `O(n²)`로 시간 초과가 날 수 있습니다.
- 시간 복잡도는 루프 문법(`for` vs `while`)보다 **탐색 구조**로 결정됩니다.
- “가격이 떨어지는 순간을 나중에 처리하지 말고, 그 순간에 처리한다”는 관점이면 **스택**으로 인덱스를 쌓아 두고, 현재가가 스택 꼭대기보다 작을 때마다 유지 기간을 한 번에 채우는 **O(n)** 풀이로 바꿀 수 있습니다.

```js
function solution(prices) {
  const result = [];
  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) break;
    }
    result.push(count);
  }
  return result;
}
```

```js
// O(n) — 가격이 떨어지는 순간마다, 스택에 쌓인 이전 시점들의 유지 시간을 계산/처리
function solution(prices) {
  const result = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  while (stack.length) {
    let prevIndex = stack.pop();
    result[prevIndex] = length - prevIndex - 1;
  }

  return result;
}
```
