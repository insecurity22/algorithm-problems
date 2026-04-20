function solution(n) {
    let x = 2;
    while(x < n) {
        if(n % x === 1) {
            return x;
        }
        x++;
    }
}

// 1. n % 1 === 0는 어떤 n이든 항상 0이므로 1은 검사할 필요가 없다.
// 2. while(x++) - while에서 증감시킬 수 있다.
// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }
// }