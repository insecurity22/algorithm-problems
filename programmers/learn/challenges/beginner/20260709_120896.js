function solution(s) {
    let charCount = new Map();
    let result = [];
    
    for(const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for(const [char, count] of charCount) {
        if(count === 1) result.push(char);
    }

    return result.sort().join('');
}

// 1. 현재 풀이 (Map + for ... of)
// - Map 객체를 사용해 문자별 개수를 저장하며, 시간 복잡도는 O(n)으로 성능과 메모리 효율이 좋다.

// 2. Map + forEach(), filter(), map()
// - 마찬가지로 시간 복잡도는 같지만, 전개 연산자, filter(), map()을 사용하는 과정에서 중간 배열이 생성된다.

// const charCount = new Map();
// [...s].forEach(char => charCount.set(char, charCount.get(char) + 1 || 1));
// return [...charCount].filter(([_, count]) => count === 1).map(([char]) => char).sort().join("");

// 3. indexOf(), lastIndexOf()
// - 각 문자의 첫 번째와 마지막 위치를 비교해 한 번만 등장한 문자를 찾는다.
// - indexOf(), lastIndexOf()가 문자열을 반복해서 탐색하므로 문자열이 길어질수록 비효율적이며, 시간 복잡도는 O(n²)다.

// let result = [];
// for (const char of s) {
//     if (s.indexOf(char) === s.lastIndexOf(char)) result.push(char);
// }
// return result.sort().join('');