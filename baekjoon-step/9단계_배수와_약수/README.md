# 9단계 배수와 약수 학습 메모

배수와 약수 단계를 풀면서 자주 쓰는 문법과 핵심 개념을 정리합니다.

## 1) K번째 약수 구하기 (`2501번`)

- `n`의 약수는 `1`부터 `n`까지 확인하면서 `n % i === 0`인지로 판별할 수 있습니다.
- 이 문제는 **정렬된 전체 약수 목록**이 아니라 **K번째 약수 하나**만 필요하므로, 약수를 배열에 저장하지 않고 `count`로 바로 세는 방식이 효율적입니다.
  - 약수를 찾을 때마다 `count++` 하고, `count === k`가 되는 순간의 `i`가 정답입니다.
  - 찾는 즉시 `break`로 반복을 종료하면 불필요한 탐색을 줄일 수 있습니다.
- K번째 약수가 끝까지 나오지 않으면 정답은 `0`입니다.
- 시간복잡도는 최악의 경우 `1`부터 `n`까지 모두 확인하므로 `O(n)`입니다.

```js
let count = 0;
let result = 0;
for (let i = 1; i <= n; i++) {
  const isFactor = n % i === 0;
  if (isFactor) {
    count++;
    if (count === k) {
      result = i;
      break;
    }
  }
}
console.log(result);
```

## 2) 소수 개수 세기 (`1978번`)

- `0`, `1`은 소수가 아니므로 제외하고, 주어진 수들 중 소수인 것만 판별하여 세면 됩니다.
- 합성수는 `2` 이상의 약수를 하나라도 가지므로, 약수 개수를 끝까지 셀 필요 없이 나누어떨어지는 수가 나오면 즉시 합성수로 판별할 수 있습니다.
- 반복은 `2`부터 √n까지만 하면 됩니다 (`i * i <= number`). 약수는 쌍으로 존재하므로 작은 쪽만 확인하면 큰 쪽은 자동으로 판별됩니다. `n`이 커질수록 `i < number` 전체 순회보다 훨씬 빠릅니다.
- 초기에 `0`으로 나머지를 구하는 연산(`% 0`)은 정의되지 않아 `NaN`이 되므로, 약수를 `0`이나 `1`부터 세는 방식은 피하는 것이 좋습니다.
- 소수 판별을 `isPrime`처럼 함수로 두면 읽기 쉽고 다른 문제에서도 재사용하기 좋습니다.

```js
function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i * i <= number; i++) {
    const isDivisor = number % i === 0;
    if (isDivisor) {
      return false;
    }
  }
  return true;
}

let primeCount = 0;
for (let i = 0; i < numberCount; i++) {
  if (isPrime(numberArr[i])) primeCount++;
}
console.log(primeCount);
```

## 3) 소인수분해 (`11653번`)

- `2`부터 시작해 `N`을 나눌 수 있는 수를 순서대로 확인합니다.
- `N % i === 0`이면 `i`는 현재 `N`의 소인수이므로 출력하고, `N = N / i`로 값을 줄입니다. 같은 소인수가 여러 번 나올 수 있으므로, `while (N % i === 0)`로 더 이상 나누어지지 않을 때까지 반복합니다.
- `while` 조건식은 반복할 때마다 다시 계산되기 때문에, `N`이 바뀌면 결과도 바로 반영됩니다. 반대로 조건을 변수(`isDivisor`)에 저장하면 값이 고정되므로, 이런 경우에는 루프 안에서 매번 다시 계산해 갱신해야 합니다.

```js
let N = Number(input);

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N = N / i;
    console.log(i);
  }
}
```
