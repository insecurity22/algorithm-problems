function solution(arr, query) {
    query.forEach((q, qIndex) => {
        if(qIndex % 2 === 0) arr = arr.slice(0, q + 1);
        else arr = arr.slice(q);
    })
    return arr;
}

// 1. reduce로 간단하게 사용 가능
// return query.reduce((acc, curr, i) => i % 2 ? acc.slice(curr) : acc.slice(0, curr + 1), arr);