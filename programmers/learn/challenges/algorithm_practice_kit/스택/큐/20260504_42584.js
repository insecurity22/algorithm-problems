function solution(prices) {
    const result = [];
    for(let i = 0; i < prices.length; i++) {
        let count = 0;
        for(let j = i + 1; j < prices.length; j++) {
            count++;
            if(prices[i] > prices[j]) break;
        };
        result.push(count);
    }
    return result;
}

// 1. 이중 for문의 단점은, 10만 개가 들어오면, O(n²)로 시간 초과가 가능하다는 것이다.
// - 위 코드는 가독성은 괜찮을 수 있지만, 알고리즘 구조상 중복 탐색을 줄이지 못해 O(n²)의 한계를 가진다. (알고리즘 구조가 성능을 결정)
// - for와 while의 성능 차이는 거의 없으며, 시간 복잡도(O(n), O(n²) 등)는 반복문의 종류가 아니라 알고리즘 구조에 의해 결정된다.
// - 따라서 문제의 구조에 맞는 접근 방식을 선택하는 것이 가장 중요하다.

// - 떨어지는 순간을 나중에 처리하지말고, 그 순간에 처리하자는 아이디어를 가지고, 구현하게 된다면 아래와 같이 구현 가능하다....
// function solution(prices) {
//   // 1) 각 시점마다 가격이 떨어지지 않은 구간
//   const result = new Array(prices.length).fill(0);

//   // 2) index를 담는 스택 (아직 가격이 떨어지지 않은 시점들)
//   const stack = [];
//   let length = prices.length;

//   for(let i = 0; i < length; i++) {
//     // 3) 스택이 비어있지 않고, 가격이 떨어졌을 때만 → 현재 가격이 더 작을 때까지 계속 반복
//     while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
//   
//       // 4) 해당 시점의 유지 기간 계산
//       let prevIndex = stack.pop();
//       result[prevIndex] = i - prevIndex;
//     }

//     // 5) 현재 시점은 아직 떨어질지 모르므로 스택에 저장
//     stack.push(i);
//   }

//   // 6) 끝까지 가격이 떨어지지 않은 기간은 몇 초인지 → 끝까지 살아남은 친구들 남은 시간 계산
//   // - stack = [4, 3, 1, 0], result = [ 0, 0, 1, 0, 0 ]
//   while(stack.length) {
//     let prevIndex = stack.pop();
//     result[prevIndex] = length - prevIndex - 1;
//   }

//   // - result = [ 4, 3, 1, 1, 0 ]
//   return result;
// }