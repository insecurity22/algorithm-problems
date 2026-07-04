function solution(numbers) {
    return numbers.map((number) => number * 2);
}

// 1. reduce 사용
// - 매 반복마다 새 배열을 생성하므로 map보다 비효율적이다.
// return numbers.reduce((a, b) => [...a, b * 2], []);