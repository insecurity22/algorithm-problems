function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for(let j = 0; j < arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))

// 1. 2차원 배열은 반드시 answer[i] = []로 먼저 초기화를 해야한다.
// - map을 사용하면 간단하고, 빠르게 작성 가능하다. (가독성 + 실수 방지 차원에서는 좋다)
// function solution(arr1, arr2) {
//     return arr1.map((row, i) =>row.map((val, j) => val + arr2[i][j]));
// }