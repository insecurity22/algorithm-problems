function solution(n) {
    let answer = [];
    while(n > 0) {
        answer.push(n % 10);
        n = Math.trunc(n / 10);
    }
    return answer;
}