function solution(myStr) {
    const result = myStr.split(/[abc]/).filter((v) => v !== '');
    return result.length ? result : ['EMPTY'];
}

// 1. 정규식을 이용한 간단한 방법
// - match() 함수는 조건에 맞는 문자열들을 찾아서 배열로 반환한다.
// - a, b, c를 제외한 남은 문자만 배열로 반환
// resturn myStr.match(/[^a-c]+/g) || ['EMPTY']