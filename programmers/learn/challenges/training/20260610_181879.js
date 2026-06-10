function solution(num_list) {
    return num_list.length <= 10 
        ? num_list.reduce((acc, cur) => acc * cur, 1) 
        : num_list.reduce((acc, cur) => acc + cur, 0);
}

// 1. 연산 함수를 변수로 분리해 의도를 명확하게 표현한 방법
// - reduce 내부 로직을 함수로 분리해 코드가 깔끔해질 수 있다.
// - 다만 이 문제는 연산이 단순해 함수를 따로 분리하는 이점이 크지 않고,
//   연산 내용을 확인하기 위해 한 번 더 위로 이동해야 하는 번거로움이 있어,
//   개인적으로는 기존 풀이가 더 직관적이라고 생각한다.

// function solution(num_list) {
//     const mult = (acc, v) => acc * v;
//     const add = (acc, v) => acc + v;

//     return num_list.length > 10
//         ? num_list.reduce(add, 0)
//         : num_list.reduce(mult, 1);
// }