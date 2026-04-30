function solution(arr, delete_list) {
    const set = new Set(arr);
    delete_list.map((item) => set.delete(item));
    return [...set];
}

// 1. 아래처럼 filter 함수로 간단하게 할 수 있다...
// const set = new Set(delete_list);
// return arr.filter((v) => !set.has(v))