function solution(n) {
    let x = 1;
    let answer = -1;
    while(x < n) {
        if(x * x === n) {
            answer = (x + 1) * (x + 1);
            break;
        }
        x++;
    }
    return answer;
}

// 현재 코드는 x를 1부터 n까지 하나씩 증가시키며 검사하므로 시간 복잡도가 O(n)이다.
// n이 매우 큰 값(예: 수억 단위)일 경우 일부 테스트에서 시간 초과가 발생할 수 있다.
//
// 이를 개선하기 위해 Math.sqrt()를 사용하면 제곱근을 한 번에 구할 수 있어
// 시간 복잡도를 O(1)로 줄일 수 있다.
//
// let x = Math.sqrt(n);
// return Number.isInteger(x) ? (x + 1) * (x + 1) : -1;