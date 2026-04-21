function solution(left, right) {
    let sum = 0;
    for(let i = left; i <= right; i++) {
        let divisorCount = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) divisorCount++;
        }
        
        if(divisorCount % 2 === 0) sum += i;
        else sum -= i;
    }
    return sum;
}

// 1. 이중 for문을 사용하지 않고 풀 수도 있다.
// - 대부분 약수는 짝으로 존재하고, 완전제곱수는 √n이 자기 자신과 짝을 이루기 때문에 약수 개수가 홀수다.
// if (Number.isInteger(Math.sqrt(i))) answer -= i;
// else answer += i;