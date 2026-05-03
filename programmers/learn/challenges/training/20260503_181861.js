function solution(arr) {
    let X = [];
    
    arr.map((item) => {
        for(let i = 0; i < item; i++) {
            X.push(item);
        }
    })
    
    return X;
}

// 1. 아래와 같이 간단하게 구현 가능하다..
// return arr.reduce((acc, curr) => [...acc, ...new Array(curr).fill(curr)], []);