# 5단계 문자열 학습 메모

문자열 단계를 풀면서 자주 쓰는 문법과 핵심 개념을 정리합니다.

## 1) 유니코드 값 출력

- 과거에는 영어(ASCII), 한글(EUC-KR), 일본어(Shift_JIS)처럼 인코딩이 서로 달라 문자 혼용 시 깨짐 문제가 발생했습니다. 이를 해결하기 위해 전 세계 문자를 하나의 기준으로 통일한 것이 유니코드이며, 유니코드는 모든 문자에 고유한 번호(Code Point)를 부여하는 표준입니다. (컴퓨터는 문자를 숫자로 저장)
- `codePointAt(0)`을 사용하면 유니코드 값을 구할 수 있으며, 문자 전체 기준으로 값을 반환하므로 이모지 같은 문자도 안전하게 처리할 수 있습니다. (예: `11654번`)
  - `charCodeAt`은 "문자 → 코드값(숫자)(16비트 한 칸 기준)" 변환
  - `codePointAt`은 "문자 → 코드값(숫자)(문자 전체 기준)" 변환
  - `fromCharCode`는 "코드값(숫자) → 문자" 변환

```js
console.log(input.codePointAt(0));
```

## 2) `indexOf`로 첫 위치 찾기

- `문자열.indexOf(찾을값)`은 문자열에서 **특정 문자가 처음 등장하는 위치(인덱스)**를 반환하며, 존재하지 않으면 `-1`을 반환합니다. (예: `10809번` — 알파벳 a~z 각각의 첫 등장 위치를 구할 때 사용)

```js
const input = "baekjoon";
console.log(input.indexOf("a")); // 1
console.log(input.indexOf("b")); // 0
console.log(input.indexOf("k")); // 3
console.log(input.indexOf("z")); // -1
```

## 3) 공백으로 단어 나누기 (`split`과 정규식 `/\s+/`)

- 연속된 공백, 줄 시작, 끝의 공백만 있는 입력 등에서 **단어 개수**를 셀 때는 `trim()` 뒤 `split(/\s+/)`처럼 **모든 공백 문자**를 구분자로 쓰는 편이 안전합니다. (예: `1152번`)
  - `/ ... /`는 **정규식 리터럴**을 나타냅니다.
  - `\s`는 단순 스페이스뿐 아니라 **줄바꿈, 탭, 기타 공백 문자**까지 포함합니다.
  - `+`는 앞 패턴이 **1번 이상** 반복됨을 뜻하므로, 공백이 여러 칸 이어져도 한 번에 나눕니다.

```js
const input = "The  Curious  Case of Benjamin Button";
console.log(input.split(/\s+/).length);
```

## 4) `.filter(Boolean)`로 빈 값 제거

- 배열에서 **빈 문자열(`""`)**, `undefined`, `null`, `0`, `false` 등 _falsy_ 값을 걸러낼 때 `.filter(Boolean)`을 쓸 수 있습니다. `Boolean`을 콜백으로 넘기면 각 요소를 불리언으로 변환해, 참인 값만 남깁니다.
- `split` 결과에 의도치 않게 **빈 조각**이 섞일 수 있는 경우 길이를 셀 때 안전장치로 두면 좋습니다. (예: `1152번`)

```js
const input = "The  Curious  Case of Benjamin Button";
console.log(input.split(/\s+/).filter(Boolean).length);
```
