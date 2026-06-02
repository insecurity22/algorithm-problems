function solution(arr) {
    let i = 0;
    const stk = [];
    while(i < arr.length) {
        if(stk.length === 0 || (stk.length !== 0 && stk[stk.length-1] < arr[i])) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop()
        }
    }
    return stk;
}

// 1. stk[stk.length - 1]는 배열이 비어 있을 경우 undefined를 반환해, undefined < arr[i]는 false가 되므로 아래 조건에서 stk.length !== 0 검사는 생략할 수 있다.
// - 예) if(stk.length === 0 || stk[stk.length - 1] < arr[i])

// 2. while문 대신 for문과 후위 증가 연산자(i++)를 활용해 구현할 수도 있다.
// - Javascript에 익숙해지면 괜찮지만, `stk.push(arr[i++])`처럼 동작을 한 줄에서 처리해 
//   코드를 읽을 때 아래 세 가지 방식에 대한 해석이 필요하고, 코드를 읽는 사람이 잠깐 생각하게 되서 좋아보이지 않는다.
//   예) arr[i]를 사용하고, push를 수행한 뒤, i를 증가시킨다.

// function solution(arr) {
//     var stk = [];
//     for(let i = 0; i < arr.length;){
//         if(stk.length === 0 || stk[stk.length-1] < arr[i]){
//             stk.push(arr[i++]);
//         }
//         else if(stk[stk.length-1] >= arr[i]){
//             stk.pop();
//         }
//     }
//     return stk;
// }

// 3. 하지만 2번 방식보다는 i++를 따로 분리하여 작성하는 것이 더 좋아보인다.
// - 기능상 차이는 없지만, 인덱스가 증가하는 시점을 더 명확하게 확인할 수 있다.
// - 또한 가독성 측면에서도 현재 방식이 더 직관적이고 명시적이어서 코드의 의도를 파악하기 쉽다.
