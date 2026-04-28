# 알고리즘 고득점 Kit 문제 풀이 (JavaScript)

문제를 JavaScript(Node.js)로 풀이한 저장소입니다.

## 1. 스택/큐

### 1) 같은 숫자는 싫어 (`20260428_12906.js`)

- `filter`를 활용하면 더 짧고 직관적으로 작성할 수 있으며, 이전 값과 비교해 중복을 제거할 수 있습니다.

```js
function solution(arr) {
  return arr.filter((value, i) => value !== arr[i - 1]);
}
```

## 2. 정렬

### 1) K번째수 (`20260428_42748.js`)

- `slice`와 `sort` 조합으로 해결할 수 있으며, `map`과 `filter`를 이용하면 각 명령을 순회하며 결과를 바로 반환하는 형태로도 작성할 수 있습니다.

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
