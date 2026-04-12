# 14단계 집합과 맵 학습 메모

집합(Set)과 맵(Map) 단계를 풀면서 자주 사용하는 문법과 핵심 개념을 정리합니다.

## 1) 숫자 카드 (`10815번`)

- `includes()`는 한 번의 탐색에 O(N)이 소요되므로 이를 M번 반복하면 전체 시간 복잡도가 O(N×M)이 되어 시간 초과가 발생할 수 있습니다.
- 반면, `Set`은 평균적으로 O(1)에 존재 여부를 확인할 수 있으므로, 카드를 `Set`에 저장하고 `Set.has()`로 검사하면 전체 시간 복잡도를 O(N + M)으로 줄일 수 있습니다.

```js
const nCard = new Set(input[1].split(" ").map(Number));
const mCard = input[3].split(" ").map(Number);

const isHaveArr = mCard.map((x) => (nCard.has(x) ? 1 : 0));
console.log(isHaveArr.join(" "));
```

## 2) 회사에 있는 사람 (`7785번`)

- 이름을 기준으로, `enter`일 경우 Set에 추가하고 `leave`일 경우 제거하여 현재 회사에 있는 사람을 관리합니다.
- `Set`은 정렬 기능을 제공하지 않으므로, 정렬을 위해 배열로 변환해야 합니다. `Array.from()`을 통해 배열로 변환한 뒤 정렬하여 출력합니다.

```js
const set = new Set();

for (let i = 1; i <= n; i++) {
  const [name, action] = input[i].split(" ");
  if (action === "enter") set.add(name);
  else set.delete(name);
}

const result = Array.from(set).sort().reverse();
console.log(result.join("\n"));
```
