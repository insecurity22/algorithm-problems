function solution(n) {
    const result = [];
    let divisor = 2;
    
    while(n > 1) {
        if(n % divisor === 0) {
            result.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }
    
    return [...new Set(result)];
}

// 1. 현재 풀이
// - 같은 약수로 더 이상 나눌 수 없을 때까지 반복해서 나눈 뒤, Set으로 중복을 제거한다.

// 2. for 풀이
// - Set으로 중복을 제거할 필요가 없어 더 깔끔하고 효율적이다.

// function solution(n) {
//     const result = [];

//     for (let i = 2; i <= n; i++) {
//         if (n % i === 0) {
//             result.push(i);

//             // 같은 약수로 더 이상 나눌 수 없을 때까지 반복해서 나눈다.
//             // 따라서 같은 소인수가 중복으로 추가되지 않아 Set으로 중복을 제거할 필요가 없다.
//             while (n % i === 0) { 
//                 n /= i;
//             }
//         }
//     }

//     return result;
// }