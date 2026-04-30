function solution(a, b) {
    const isEvenNumberA = a % 2 === 0;
    const isEvenNumberB = b % 2 === 0;
    
    if(!isEvenNumberA && !isEvenNumberB) {
        return a ** 2 + b ** 2;
    }
    
    if(!isEvenNumberA || !isEvenNumberB) {
        return 2 * (a + b);
    }
    
    if(isEvenNumberA && isEvenNumberB) {
        return Math.abs(a - b);
    }
    
    return -1;
}