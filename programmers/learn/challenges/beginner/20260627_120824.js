function solution(num_list) {
    return num_list.reduce(([even, odd], cur) => {
        return cur % 2 === 0 ? [even+=1, odd] : [even, odd+=1];
    }, [0, 0])
}

// 1. 현재 reduce 방법
// - 매 반복마다 새로운 배열 [even, odd]를 생성하고, 단순 개수 세기 문제에는 다소 복잡하게 느껴질 수 있다.

// 2. filter 사용한 방법
// - 의도는 명확하지만, filter는 조건에 맞는 원소를 모아 새 배열을 만드는 함수라 개수만 필요한 경우에도 배열이 생성된다.

// return [
//     num_list.filter((num) => num % 2 === 0).length,
//     num_list.filter((num) => num % 2 === 1).length,
// ];

// 3. for...of 방법
// - 배열을 한 번만 순회하며, 가장 짧고 직관적이다.

// let answer = [0, 0];
// for(let num of num_list) {
//     answer[num % 2] += 1;
// }
// return answer;
