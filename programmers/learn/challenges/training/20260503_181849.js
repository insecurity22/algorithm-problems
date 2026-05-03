function solution(num_str) {
    return num_str.split('').map(Number).reduce((acc, curr) => acc + curr, 0);
}

// 1. 아래가 더 가독성이 좋아보인다.
// - +curr = Number(curr) 
// return [...num_str].reduce((acc, curr) => acc + curr, 0);