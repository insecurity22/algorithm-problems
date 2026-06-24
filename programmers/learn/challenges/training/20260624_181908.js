function solution(my_string, is_suffix) {
    return +my_string.endsWith(is_suffix)
}

// 1. str.endsWith(searchString) 문법
// - str: 검사할 문자열
// - searchString: 끝에 붙어있는지 확인할 문자열

// 2. 직접 비교 방법
// - 뒤에서 length만큼 잘라서 비교
// function solution(my_string, is_suffix) {
//     return +(my_string.slice(-is_suffix.length) === is_suffix);
// }