function solution(before, after) {
    return Number([...before].sort().join('') === [...after].sort().join(''));
}

// 1. 어떤 문자가 몇 개 들어있는지
// - 문자 구성은 순서와 상관없이, 각 문자가 몇 개씩 있는지만 같으면 동일한 것으로 본다.