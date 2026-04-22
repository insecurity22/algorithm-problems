function solution(price, money, count) {
    let total = 0;
    for(let i = 1; i <= count; i++) {
        total += price * i;
    }
    return money > total ? 0 : Math.abs(money - total);
}

// 1. 가우스 공식으로 간단하게 짤 수 있다.
// - 1부터 n까지의 합을 한 번에 구하는 공식인 가우스 공식
// - 1 + 2 + 3 + ... + n => n(n + 1) / 2 
// - ex) 1 + 2 + 3 + 4 = 10 => (count * (count + 1)) / 2
// - ex) 3(1 + 2 + 3 + 4) => price * ((count * (count + 1)) / 2)

// function solution(price, money, count) {
//     const total = price * count * (count + 1) / 2 - money;
//     return total > 0 ? total : 0;
// }