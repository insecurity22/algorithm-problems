function solution(a, b) {
    const ab = Number(String(a) + String(b));
    const ab2 = 2 * a * b;

    if (ab === ab2) return ab;
    return Math.max(ab, ab2);
}

// 1. 삼항 연산자를 사용해 더 간단하게 표현할 수 있다.

// return ab > ab2 ? ab : ab2;

// 2. Math.max와 템플릿 리터럴을 활용한 방법
// - 별도의 변수 선언 없이 한 줄로 간결하게 작성할 수 있다.
// - 디버깅 시 중간 값을 확인하기는 불편할 수 있지만, 개인적으로는 간단해서 좋아 보인다.

// return Math.max(Number(`${a}${b}`), 2 * a * b);