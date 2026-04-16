function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let p = participant[i], 
            c = completion[i];

        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);
    }

    for(let [key, value] of map) {
        if(value > 0) return key;
    }
}
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));

// 1. 정확성 테스트 통과, 효율성 테스트 실패
// - indexOf: O(n), splice: O(n) 두 연산을 반복하므로 전체 시간 복잡도는 O(n²)
// - 데이터가 커질 경우 시간 초과 발생 가능
// function solution(participant, completion) {
//     for (let c of completion) {
//         const index = participant.indexOf(c);
//         participant.splice(index, 1);
//     }
//     return participant.join(" ");
// }

// 2. 객체(Object) + for...in 사용 시 효율성 이슈 가능
// - 객체는 해시처럼 사용 가능하지만,
//   문자열 key 처리, 프로퍼티 탐색 비용, 해시 충돌 등으로 인해
//   대용량 데이터에서 성능이 저하될 수 있다.
// for (let key in map) {
//     if (map[key] > 0) return key;
// }

// 3. Map을 사용한 개선된 풀이 (O(n))
// - Map은 해시 기반 자료구조로 삽입/조회가 평균 O(1)
// for (let p of participant) {
//     map.set(p, (map.get(p) || 0) + 1);
// }
// for (let c of completion) {
//     map.set(c, map.get(c) - 1);
// }