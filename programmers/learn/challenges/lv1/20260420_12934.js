function solution(n) {
    const x = Math.sqrt(n);
    if(Number.isInteger(x)) {
        return (x + 1) * (x + 1);
    }
    return -1;
}

// 1. while (x < n)
// - 1², 2², 3², … n까지 순차적으로 검사하므로, 최악의 경우 n = 10^12까지 반복하게 된다. 
// - 시간복잡도는 O(n)로, 입력 값이 커지면 효율성(시간) 측면에서 적합하지 않다.
// function solution(n) {
//     let x = 1;
//     while(x < n) {
//         if(x * x === n) {
//             return (x + 1) * (x + 1);
//         }
//         x++;
//     }
    
//     return -1;
// }

// 2. x * x === n 값이 항상 완벽한 정수로 떨어지는 게 아니다.
// - 123456789 → 123456789.00000001 미세하게 틀어질 수 있다.
// function solution(n) {
//     const x = Math.sqrt(n);
//     if(x * x === n) {
//         return (x + 1) * (x + 1);
//     }
//     return -1;
// }