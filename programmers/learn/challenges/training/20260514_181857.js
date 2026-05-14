function solution(arr) {
    let power = 1;
    
    while(power < arr.length) { // 거듭제곱 구하기
        power *= 2;
    }
    
    while(arr.length < power) { // 답 구하기
        arr.push(0);
    }
    
    return arr;
}