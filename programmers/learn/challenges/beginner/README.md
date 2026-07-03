# 코딩 기초 문제 풀이 (JavaScript)

문제를 JavaScript(Node.js)로 풀이한 저장소입니다.

## 1. 문자열 변환 방법 비교 (`20260701_120904.js`)

숫자를 문자열로 바꿀 때 자주 쓰는 세 가지 방법을 비교합니다.

### 1) `'' + num` — 암묵적 형변환

- 빈 문자열과 더하면 JavaScript가 `num`을 문자열로 **암묵적 형변환**한다.
- 동작에는 문제가 없지만, 문자열로 변환한다는 의도가 코드만으로는 명확하게 드러나지 않을 수 있다.

```js
const str = "" + 12345; // "12345"
```

### 2) `String(num)` — 명시적 형변환 ✨

- `String()`을 사용해 **명시적 형변환**하므로, 문자열로 변환한다는 의도가 가장 명확하다.
- `String(null)`, `String(undefined)`도 에러 없이 `"null"`, `"undefined"`로 변환되어 비교적 안전하다.

```js
const str = String(12345); // "12345"
String(null); // "null"
String(undefined); // "undefined"
```

### 3) `num.toString()` — 메서드 호출

- `toString()` 메서드를 호출해 문자열로 변환한다. 숫자뿐 아니라 배열, 객체 등 다양한 값에서도 사용할 수 있다.
- 다만 `null`이나 `undefined`에서는 `TypeError`가 발생할 수 있다.

```js
const str = (12345).toString(); // "12345"

null.toString(); // TypeError
undefined.toString(); // TypeError
```

### 결론 요약 정리

| 방법             | 의도 명확성 | null/undefined          | 비고                          |
| ---------------- | ----------- | ----------------------- | ----------------------------- |
| `'' + num`       | 낮음        | `"null"`, `"undefined"` | 암묵적 형변환                 |
| `String(num)`    | 높음        | 안전 ✨                 | 일반적으로 권장               |
| `num.toString()` | 보통        | 에러 발생               | 값이 항상 숫자일 때 사용 가능 |

- 해당 문제처럼 숫자를 문자열로 바꿔 자릿수를 다뤄야할 때는 **`String(num)`** 이 의도가 가장 명확하고 예외 상황에도 비교적 안전한 선택이다.

## 2. 문자열에서 숫자만 합산하기 `(20260703_120851.js)`

### 1) Number(cur) ? acc + +cur : acc를 사용하지 않는 이유
- isNaN() 대신 Number(cur) ? acc + +cur : acc 형태로 더 간결하게 작성할 수 있지만, Number('0')은 0(falsy)이므로 숫자인 0도 조건에서 제외된다.
- 문제에서는 결과가 같지만, "숫자라면 더한다."는 의도와 맞지 않으므로 논리적으로 올바른 코드가 아니다.

### 2) match() 사용 시 주의할 점
- match()는 찾은 결과가 없으면 null을 반환한다.
따라서 match(...).reduce(...)를 바로 호출하면 null.reduce(...)와 같아져 에러가 발생할 수 있다.
- 또한 정규식 처리 비용이 추가되므로 일반적으로 전개 연산자 + reduce() 풀이보다 성능이 떨어진다.