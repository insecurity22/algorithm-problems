function solution(num_list, n) {
    let result = [];

    for(let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }

    return result;
}

// 1. for + slice
// - n개씩 잘라 2차원 배열에 추가하며, 원본 배열을 변경하지 않아 직관적이고 안전하다. (splice는 원본 배열을 수정함)

// 2. Array.from / map 사용
// return Array.from({ length: num_list.length / n }, (_, i) => num_list.slice(i * n, i * n + n));

// 3. while + splice
// - splice가 원본 배열을 변경하는 특성을 이용해, 앞에서 n개를 꺼내면서 동시에 원본 배열에서 제거한다.

// 반환값: [1, 2]
// 원본 arr: [3, 4, 5, 6]

// let answer = [];
// while(num_list.length) {
//     answer.push(num_list.splice(0, n));
// }
// return answer;