function solution(numbers) {
    const sort = numbers.sort((a, b) => a - b);
    const sortLength = sort.length;
    return sort[sortLength - 1] * sort[sortLength - 2];
}

// 1. 오름차순 정렬 + at()
// - 가장 큰 두 수가 뒤에 오도록 정렬한 뒤 at()으로 접근한다.

// numbers = numbers.sort((a, b) => a - b);
// return numbers.at(-1) * numbers.at(-2);

// 2. 내림차순 정렬
// - 가장 큰 두 수가 앞에 오도록 정렬한 뒤 곱한다.
// - 가장 직관적이고 간단한 방법이다.

// numbers.sort((a, b) => b - a);
// return numbers[0] * numbers[1];

// 3. 추가적으로 구조 분해 할당을 사용하면 더 가독성이 좋아진다.
// - 내림차순 정렬 후 가장 큰 두 수를 바로 꺼내 사용한다.

// let [a, b] = numbers.sort((a,b) => b - a);
// return a * b;