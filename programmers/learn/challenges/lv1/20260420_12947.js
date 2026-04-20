function solution(x) {
    let num = x;
    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }

    return x % sum === 0;
}

// 아래 코드 대신 간단하게 x % sum === 0로 사용 가능
// let isHarshadNumber = x % sum === 0;
// if(isHarshadNumber) {
//     return true
// };
// return false;