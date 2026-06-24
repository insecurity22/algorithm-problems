function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + (d * i) : acc;
    }, 0)
}

// 1. for
// function solution(a, d, included) {
//     let sum = 0;
//     for(let i = 0; i < included.length; i++) {
//         if(included[i]) sum += a + (d * i);
//     }
//     return sum;
// }