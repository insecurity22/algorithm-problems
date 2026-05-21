function solution(num_list) {
    const mul = num_list.reduce((acc, cur) => acc * cur, 1);
    const sum = num_list.reduce((acc, curr) => acc + curr, 0);
    return (mul < sum * sum) ? 1 : 0;
}

// (+)
// function solution(num_list) {
//     let accMul = 1;
//     let accSum = 0;
//     for(const num of num_list) {
//         accMul *= num;
//         accSum += num;
//     }
//     return accMul < accSum ** 2 ? 1 : 0;
// }