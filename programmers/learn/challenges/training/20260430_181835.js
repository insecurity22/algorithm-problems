function solution(arr, k) {
    const isEvenNumber = k % 2 === 0;
    if(!isEvenNumber) {
        return arr.map((item) => item * k);
    } else {
        return arr.map((item) => item + k);
    }
}

// 1. 한 줄로 간단하게 사용 가능
// - arr.map((item) => k % 2 ? item * k : item + k);