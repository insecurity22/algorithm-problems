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

## 3) 나는야 포켓몬 마스터 이다솜 (`1620번`)

- `Array`에 이름만 저장하고 순차 탐색으로 찾으면 한 번에 `O(N)`이 걸리며, 이를 `M`번 반복하면 최악의 경우에는 `O(N × M)`되어 `N, M = 100,000`일 때 약 `10¹⁰`으로 시간 초과가 발생합니다. 배열은 `arr[i]`처럼 인덱스로 접근할 때는 `O(1)`이지만, indexOf 등올 특정 값을 찾으면 `O(N)`의 선형 탐색이 필요합니다.
- 반면 `Map`은 **해시 기반 키 조회**로 동작하여 `poketmonMap.get(name)`을 통해 값을 시간복잡도 `O(1)`에 즉시 조회할 수 있어 빠르고 대량 데이터 처리에 적합합니다. 다만 `Map`은 기본적으로 값 → 키 역조회를 지원하지 않으며, `get(key)`을 통한 키 → 값 조회만 가능합니다.
- 이 문제는 **이름 → 번호, 번호 → 이름**의 양방향 조회가 필요하므로, 이름 → 번호는 `Map`, 번호 → 이름은 `Array`로 나누어 처리한다. 두 구조를 함께 사용하면 모든 연산을 O(1)로 수행할 수 있어 전체 시간복잡도를 `O(N + M)`으로 줄일 수 있습니다.
  - **이름 → 번호**: `Map`에 `(name -> index)` 저장 → `pokemonMap.get(name)` (O(1))
  - **번호 → 이름**: `Array`을 1부터 채움 → `pokemonList[num]` (O(1))

```js
const pokemonList = new Array(N + 1);
const pokemonMap = new Map();
for (let i = 1; i <= N; i++) {
  const name = input[i];
  pokemonList[i] = name;
  pokemonMap.set(name, i);
}
```
