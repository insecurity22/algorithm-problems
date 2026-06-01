function solution(str1, str2) {
    let str = '';
    const maxLength = Math.max(str1.length, str2.length)
    for(let i = 0; i < maxLength; i++) {
        str += (str1[i] || '') + (str2[i] || '');
    }
    return str;
}

// 1. "str1과 str2의 길이는 같습니다"라는 조건이기 때문에 아래와 같이 간단하게 작성 가능하다.
// [...str1].map((x, idx) => x + str2[idx]).join("");