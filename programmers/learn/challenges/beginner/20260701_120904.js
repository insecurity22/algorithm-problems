function solution(num, k) {
    const numArr = [...String(num)];
    return numArr.includes(String(k)) ? numArr.indexOf(String(k)) + 1 : -1;
}

// 1. 앞에 문자 하나를 추가하는 방법
// - 앞에 임의의 문자를 붙여 index를 1부터 시작하도록 만든다.

// return ("❤" + num).indexOf(k);

// 2. indexOf 활용
// - 문자열로 변환한 뒤 indexOf()로 위치를 찾는다.
// - indexOf()는 값을 찾지 못하면 -1을 반환하므로 이를 처리해준다.
//
// let index = String(num).indexOf(k);
// return index === -1 ? -1 : index + 1;

// 3. 문자열 변환 방법 비교 분석

// 1) '' + num
// - 암묵적 형변환(자동 타입 변환)이 발생한다. (문자열과의 덧셈 과정에서)
// - 동작은 가능하지만 의도가 명확하게 드러나지 않는다.

// 2) String(num) ✨
// - 명시적 형변환으로 문자열로 변환한다는 의도가 가장 명확하다.
// - String(null), String(undefined)도 에러 없이 변환할 수 있어 비교적 안전하다. (예외 상황이 적다)

// 3) num.toString()
// - toString() 메서드를 호출해 문자열로 변환하며, 숫자나 객체에서 사용할 수 있다.
// - null이나 undefined에서는 에러가 발생한다.
//   ex) null.toString(), undefined.toString() 호출 시 TypeError가 발생한다.