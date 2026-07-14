function solution(my_str, n) {
    const result = [];
    for(let i = 0; i < my_str.length; i += n) {
        result.push(my_str.slice(i, i + n));
    }
    return result;
}

// 1. Array.from
// return Array.from({ length: Math.ceil(my_str.length / n) }, (_, i) => my_str.slice(i * n, (i + 1) * n));

// 2. RegExp + match: 정규표현식으로 n글자씩 추출하는 방식
// return my_str.match(new RegExp(`.{1,${n}}`, "g"));