function solution(binomial) {
    const [a, op, b] = binomial.split(' ').map((v) => !isNaN(v) ? Number(v) : v);
   
    if(op === '+') {
        return a + b;
    } else if(op === '-') {
        return a - b;
    } else if(op === '*') {
        return a * b;
    }
}

/**
 * 1. 아래 코드가 더 가독성 좋아보인다.
 * 
 * const ops = {
 *   '+': (a, b) => a + b,
 *   '-': (a, b) => a - b,
 *   '*': (a, b) => a * b,
 * };
 * 
 * function solution(binomial) {
 *   const [a, op, b] = binomial.split(' ');
 *   return ops[op](+a, +b);
 * }
 */