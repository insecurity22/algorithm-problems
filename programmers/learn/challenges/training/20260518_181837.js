function solution(order) { // 아메리카노 4500, 카페라떼 5000
    return order.reduce((acc, curr) => {
        if(/americano|anything/.test(curr)) return acc + 4500;
        if(/cafelatte/.test(curr)) return acc + 5000;
    }, 0);
}