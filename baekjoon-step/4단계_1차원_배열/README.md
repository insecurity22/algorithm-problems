# 4단계 1차원 배열 학습 메모

1차원 배열 단계를 풀면서 자주 쓰는 문법과 핵심 개념을 정리합니다.

## 1) 최솟값/최댓값은 큰 배열에서 `for`문 비교가 안전

- `10818번`에서처럼 최솟값/최댓값을 구할 때 `Math.min(...intArr)`, `Math.max(...intArr)`는 짧고 편합니다.
- 스프레드(`...`)로 매우 큰 배열(예: 백만 단위)을 전달할 경우, 호출 스택 제한으로 인해 에러가 발생할 수 있어 for문 방식이 더 안전합니다.

```js
const initialValue = intArr[0];
let min = initialValue;
let max = initialValue;

for (let i = 1; i < intArr.length; i++) {
  if (intArr[i] < min) min = intArr[i];
  if (intArr[i] > max) max = intArr[i];
}
```

## 2) `Array.from`으로 배열 길이와 초기값 한 번에 설정하기

- `Array.from({ length: N }, (_, i) => i + 1)` 형태를 사용하면 배열의 길이와 초기값을 한 번에 설정할 수 있습니다.
- `10813번`처럼 바구니 번호를 `1`부터 시작해야 할 때 직관적으로 초기화하기 좋습니다.

```js
const basketArr = Array.from({ length: N }, (_, i) => i + 1);
```

## 3) 구조 분해 할당으로 두 값 교환

- `10813번`처럼 두 값을 교환할 때 임시 변수를 만들지 않고 구조 분해 할당으로 간단하게 처리할 수 있습니다.
- 배열 변수는 메모리에 있는 배열 객체를 가리키는 참조를 담고 있습니다. 따라서 구조 분해를 이용한 swap 역시 배열 전체를 복사하지 않고, 동일한 배열 내부의 요소 값만 교환하는 방식으로 동작합니다. 그 결과 특정 인덱스의 값만 변경됩니다.

```js
[basketArr[first], basketArr[second]] = [basketArr[second], basketArr[first]];
```

## 4) `Set.has()`로 제출 여부 빠르게 확인하기

- `5597번`처럼 특정 학생 번호가 제출자 목록에 있는지 여러 번 확인해야 할 때는 배열보다 `Set`이 효율적입니다. `includes()`는 배열을 선형 탐색`O(n)`으로 값을 찾지만, `Set.has()`는 평균 `O(1)`로 조회할 수 있습니다.
- 반복문 안에서 "목록에 포함되어 있는지 확인"을 자주 해야 하는 문제일수록 `Set`을 쓰는 쪽이 성능상 유리합니다.

```js
const submitted = input.trim().split("\n").map(Number);
const submittedSet = new Set(submitted);

const nonSubmitters = [];
for (let i = 1; i <= 30; i++) {
  if (!submittedSet.has(i)) nonSubmitters.push(i);
}
```

## 5) 구조 분해 할당으로 구간 순서 뒤집기

- `10811번`에서는 바구니 구간 `i~j`를 뒤집기 위해 양끝 인덱스의 값을 서로 교환하는 방식이 핵심입니다.
- `while (i < j)` 동안 구조 분해 할당으로 값을 교환하면, 양쪽에서 가운데로 좁혀가며 자연스럽게 역순이 됩니다.
- 이 방식은 별도의 임시 배열 없이 제자리(in-place)에서 순서를 변경할 수 있어 간결하고 효율적입니다.

```js
while (i < j) {
  [basketArr[i], basketArr[j]] = [basketArr[j], basketArr[i]];
  i++;
  j--;
}
```

### 동작 흐름 예시 (`i=1`, `j=4`)

1. **초기 상태**
   - `i = 1`, `j = 4`
   - `basketArr = [1, 2, 3, 4, 5]`

2. **1번째 반복**
   - `swap basketArr[1] ↔ basketArr[4]`
   - `basketArr = [1, 5, 3, 4, 2]`
   - `i = 2`, `j = 3`

3. **2번째 반복**
   - `swap basketArr[2] ↔ basketArr[3]`
   - `basketArr = [1, 5, 4, 3, 2]`
   - `i = 3`, `j = 2`

4. **반복 종료**
   - `i = 3`, `j = 2` 이므로 `i >= j` 조건 성립
   - `while` 종료
   - 최종 배열: `[1, 5, 4, 3, 2]`
