function solution(n, k) {
    const freeDrink = Math.floor(n / 10);
    return (n * 12000) + (k - freeDrink) * 2000;
}