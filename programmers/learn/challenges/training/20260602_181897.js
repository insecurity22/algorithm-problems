function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    if(n === 1) return num_list.slice(0, b + 1);
    if(n === 2) return num_list.slice(a);
    if(n === 3) return num_list.slice(a, b + 1);
    if(n === 4) return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
}

// 1. 개인적으로 아래 방법이 좋아보인다.
// 1) 각 조건별 동작을 객체에 분리하여 관리할 수 있어 구조가 깔끔하다.
// 2) n에 따른 처리 로직이 한곳에 모여 있어 추가 및 수정이 용이하다.
// 3) 다만 현재 문제처럼 조건이 단순한 경우에는 if문이나 switch문이 더 직관적으로 느껴질 수도 있다.

// const slices = {
//   1: (num_list, [a, b, c]) => num_list.slice(0, b + 1),
//   2: (num_list, [a, b, c]) => num_list.slice(a),
//   3: (num_list, [a, b, c]) => num_list.slice(a, b + 1),
//   4: (num_list, [a, b, c]) => num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
// };

// function solution(n, slicer, num_list) {
//   return slices[n](num_list, slicer);
// }