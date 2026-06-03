function solution(arr) {
    const stk = [];
    let i = 0;
    while(i < arr.length) {
        const currentItem = arr[i];
        if(stk.length && stk[stk.length - 1] === currentItem) stk.pop();
        else stk.push(arr[i]);
        i++;
    }
    return stk.length ? stk : [-1];
}

// 1. slice() 함수
// - stk.slice(-1)라고 하면 마지막 원소를 가져오기만 하고 버린다. 배열은 전혀 바뀌지 않는다.

// 2. 다른 방법
// - 두 코드 모두 정답이고, 시간복잡도도 동일하게 O(n)이지만, 가독성, 유지보수성 측면에서는 아래 방법이 더 좋아보인다.
// - 또한 인덱스 관리가 불필요하고, 문제의 규칙이 그대로 드러나 의도가 훨씬 더 잘 표현된 것 같다.

// function solution(arr) {
//     const stk = [];
//     for(const item of arr) {
//         if(stk.length && stk[stk.length - 1] === item) stk.pop();
//         else stk.push(item);
//     }
//     return stk.length ? stk : [-1];
// }