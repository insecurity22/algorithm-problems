// 1. 현재 풀이 (중첩 for문)
// - 직관적이고 이해하기 쉽지만, 확대된 문자열을 매번 새로 생성한다는 단점이 있다.
// - 예를 들어 k = 3이면 "aaabbbccc"를 3번 생성한 뒤 push하므로 불필요한 연산이 발생한다.

function solution(picture, k) {
    const result = [];

    for(let i = 0; i < picture.length; i++) {
        for(let j = 0; j < k; j++) {
            result.push([...picture[i]].map((pic) => pic.repeat(k)).join(""))
        }
    }

    return result;
}

// 2. forEach 풀이
// - map().join()을 반복문 밖에서 한 번만 실행해 문자열을 생성한다.
// - 생성한 문자열을 k번 재사용하므로 불필요한 연산을 줄일 수 있으며, 성능과 가독성의 균형이 좋은 방법이다.
//
// picture.forEach((pic) => {
//     const cur = [...pic].map((c) => c.repeat(k)).join('');
//     for(let i = 0; i < k; i++) {
//         result.push(cur);
//     }
// });

// 3. forEach + reduce 풀이
// - 확대된 문자열을 한 번만 생성하므로 성능은 2번과 비슷하다.

// picture.forEach((line) => {
//     const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');
//     for(let i = 0; i < k; i++) {
//         result.push(expanded);
//     }
// });