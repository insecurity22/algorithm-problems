function solution(num_list) {
    return num_list.reverse();
}

// → 대신 reverse 함수 활용
// function solution(num_list) {
//     let answer = [];
//     let length = num_list.length;
//     for(let i = 1; i <= length; i++) {
//         answer.push(num_list[length - i]);
//     }
//     return answer;
// }