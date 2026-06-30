function solution(i, j, k) {
    let count = 0;
    for(let str = i; str <= j; str++) {
        count += [...String(str)].filter((v) => v === String(k)).length;
    }
    return count;
}

// 1. 문자열 누적 + split
// - 각 숫자를 문자열로 변환한 뒤 k와 일치하는 문자만 남겨 개수를 세는 방식으로, 짧고 직관적으로 해결할 수 있다.

// let str = '';
// for (let n = i; n <= j; n++) {
//     str += n;
// }
// return str.split(k).length - 1;

// 2. 배열 + 메서드 체이닝
// - i부터 j까지의 숫자를 문자열로 이어 붙인 뒤, k와 일치하는 문자만 남겨 개수를 센다.

// let str = Array(j - i + 1).fill(i).map((v, i) => v + i).join('')
// return Array.from(str).filter(v => +v === k).length;